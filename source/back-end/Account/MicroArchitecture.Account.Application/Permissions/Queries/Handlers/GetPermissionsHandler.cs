using MediatR;
using MicroArchitecture.Account.Domain.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.RawQueries;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Permissions.Queries.Handlers
{
    public class GetPermissionsHandler : IRequestHandler<GetPermissions, ApiResult<IEnumerable<PermissionStatus>>>
    {
        private readonly IDapperQuery _dapperQuery;

        public GetPermissionsHandler(IDapperQuery dapperQuery)
        {
            _dapperQuery = dapperQuery;
        }

        public async Task<ApiResult<IEnumerable<PermissionStatus>>> Handle(GetPermissions request, CancellationToken cancellationToken)
        {
            var query = RoleQueries.GetPermissions();
            var result = await _dapperQuery.QueryAsync<PermissionStatus>(query.Query);

            return ApiResult<IEnumerable<PermissionStatus>>.Ok(result);
        }
    }
}
