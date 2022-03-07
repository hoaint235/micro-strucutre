using MediatR;
using MicroArchitecture.API.Domain.Commons.Models;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using MicroArchitecture.API.Infrastructure.Database.Dapper;
using MicroArchitecture.API.Infrastructure.RawQueries;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Permissions.Queries
{
    public class GetPermissions
    {
        public class Request : IRequest<ApiResult<IEnumerable<PermissionStatus>>>
        { }

        public class Handler : IRequestHandler<Request, ApiResult<IEnumerable<PermissionStatus>>>
        {
            private readonly IDapperQuery _dapperQuery;

            public Handler(IDapperQuery dapperQuery)
            {
                _dapperQuery = dapperQuery;
            }

            public async Task<ApiResult<IEnumerable<PermissionStatus>>> Handle(Request request, CancellationToken cancellationToken)
            {
                var query = RoleQueries.GetPermissions();
                var result = await _dapperQuery.QueryAsync<PermissionStatus>(query.Query);

                return ApiResult<IEnumerable<PermissionStatus>>.Ok(result);
            }
        }
    }
}
