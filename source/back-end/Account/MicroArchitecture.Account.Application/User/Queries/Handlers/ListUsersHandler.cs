using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Domain.Roles;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.RawQueries;

namespace MicroArchitecture.Account.Application.User.Queries.Handlers
{
    public class ListUsersHandler : IRequestHandler<ListUsers, ApiResult<IEnumerable<UserDto>>>
    {
        private readonly IDapperQuery _dapperQuery;
        private readonly IAppContext _appContext;

        public ListUsersHandler(IDapperQuery dapperQuery
            , IAppContext appContext)
        {
            _dapperQuery = dapperQuery;
            _appContext = appContext;
        }

        public async Task<ApiResult<IEnumerable<UserDto>>> Handle(ListUsers request, CancellationToken cancellationToken)
        {
            var currentUser = await _appContext.GetCurrentUserAsync();
            var roles = Role.GetRole(currentUser.Roles);
            var roleIds = roles.Where(x => x.Type != RoleType.Master).Select(x => x.Id).ToList();

            var query = UserQueries.ListUser(roleIds);
            var result = await _dapperQuery.QueryAsync<UserDto>(query.Query, query.Parameters);
            return ApiResult<IEnumerable<UserDto>>.Ok(result);
        }
    }
}