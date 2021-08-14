using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.RawQueries;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Permissions.Commands.Handlers
{
    public class UpdateHandler : IRequestHandler<Update, ApiResult<Unit>>
    {
        private readonly IDapperQuery _dapperQuery;

        public UpdateHandler(IDapperQuery dapperQuery)
        {
            _dapperQuery = dapperQuery;
        }

        public async Task<ApiResult<Unit>> Handle(Update request, CancellationToken cancellationToken)
        {
            var query = RoleNonQueries.UpdatePermissions(request.Permissions);
            await _dapperQuery.ExecuteAsync(query.Query, query.Parameters);

            return ApiResult.Ok();
        }
    }
}
