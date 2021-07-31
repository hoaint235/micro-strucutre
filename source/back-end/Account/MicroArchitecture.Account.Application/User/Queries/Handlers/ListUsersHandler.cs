using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Domain.Core.HttpClient;
using MicroArchitecture.Account.Domain.Roles;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.RawQueries;

namespace MicroArchitecture.Account.Application.User.Queries.Handlers
{
    public class ListUsersHandler : IRequestHandler<ListUsers, ApiResult<ListingResponse<UserDto>>>
    {
        private readonly IDapperQuery _dapperQuery;
        private readonly IAppContext _appContext;

        public ListUsersHandler(IDapperQuery dapperQuery
            , IAppContext appContext)
        {
            _dapperQuery = dapperQuery;
            _appContext = appContext;
        }

        public async Task<ApiResult<ListingResponse<UserDto>>> Handle(ListUsers request, CancellationToken cancellationToken)
        {
            var currentUser = await _appContext.GetCurrentUserAsync();
            var roles = Role.GetRole(currentUser.Roles);
            var roleMaster = roles.FirstOrDefault(x => x.Type == RoleType.Master);

            var query = UserQueries.ListUser(request, currentUser.Id, roles.Select(x => x.Id).ToList());
            var users = await _dapperQuery.QueryAsync<UserDto>(query.Query, query.Parameters);

            if (!users.Any())
            {
                return ApiResult<ListingResponse<UserDto>>.Ok(ListingResponse<UserDto>.Empty());
            }

            foreach (var data in users)
            {
                data.HasPermission = !data.Roles.Contains(roleMaster.Id);
            }

            var result = new ListingResponse<UserDto>(users, users.First().TotalItems);
            return ApiResult<ListingResponse<UserDto>>.Ok(result);
        }
    }
}