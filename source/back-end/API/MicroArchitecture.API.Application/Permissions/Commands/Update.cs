using MediatR;
using MicroArchitecture.API.Domain.Commons.Models;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using MicroArchitecture.API.Infrastructure.Database.Dapper;
using MicroArchitecture.API.Infrastructure.RawQueries;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Permissions.Commands
{
    public class Update
    {
        public class Command : IRequest<ApiResult<Unit>>
        {
            public ICollection<PermissionStatus> Permissions { get; set; }
        }

        public class Handler : IRequestHandler<Command, ApiResult<Unit>>
        {
            private readonly IDapperQuery _dapperQuery;

            public Handler(IDapperQuery dapperQuery)
            {
                _dapperQuery = dapperQuery;
            }

            public async Task<ApiResult<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var query = RoleNonQueries.UpdatePermissions(request.Permissions);
                await _dapperQuery.ExecuteAsync(query.Query, query.Parameters);

                return ApiResult.Ok();
            }
        }
    }
}
