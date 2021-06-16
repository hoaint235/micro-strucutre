using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Domain.Core.HttpClient;
using MicroArchitecture.Account.Domain.Roles;
using MicroArchitecture.Account.Infrastructure.Commons.Extensions;
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

            var result = await UserQueries
                .ListUser(request, currentUser.Id, roles.Select(x => x.Id).ToList())
                .ListingAsync<UserDto>(_dapperQuery);

            foreach (var data in result.Data)
            {
                data.HasPermission = !data.Roles.Contains(roleMaster.Id);
            }

            return ApiResult<ListingResponse<UserDto>>.Ok(result);
        }
    }
}