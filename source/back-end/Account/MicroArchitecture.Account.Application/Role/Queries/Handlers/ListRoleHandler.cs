using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Application.Role.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.RawQueries;

namespace MicroArchitecture.Account.Application.Role.Queries.Handlers
{
    public class ListRoleHandler : IRequestHandler<ListRole, ApiResult<IEnumerable<RoleDto>>>
    {
        private readonly IDapperQuery _dapperQuery;

        public ListRoleHandler(IDapperQuery dapperQuery)
        {
            _dapperQuery = dapperQuery;
        }

        public async Task<ApiResult<IEnumerable<RoleDto>>> Handle(ListRole request, CancellationToken cancellationToken)
        {
            var query = RoleQueries.GetRoles();
            var result = await _dapperQuery.QueryAsync<RoleDto>(query.Query, query.Parameters);
            return ApiResult<IEnumerable<RoleDto>>.Ok(result);
        }
    }
}
