using MediatR;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Infrastructure.Commons.Extensions;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Roles.Queries.Handlers
{
    public class GetCurrentPermissionsHandler : IRequestHandler<GetCurrentPermissions, ApiResult<IEnumerable<PermissionType>>>
    {
        private IAppContext _appContext;

        public GetCurrentPermissionsHandler(IAppContext appContext)
        {
            _appContext = appContext;
        }

        public async Task<ApiResult<IEnumerable<PermissionType>>> Handle(GetCurrentPermissions request, CancellationToken cancellationToken)
        {
            var currentUser = await _appContext.GetCurrentUserAsync();
            var permissions = currentUser.Roles
                .Where(x => x.Name.To<RoleType>() == request.Role)
                .SelectMany(x => x.Permissions.Select(x => x.Split('-')[0])).Distinct();

            return ApiResult<IEnumerable<PermissionType>>.Ok(permissions.Select(x => x.To<PermissionType>()));
        }
    }
}
