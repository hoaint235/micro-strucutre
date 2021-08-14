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
            var role = currentUser.Roles.FirstOrDefault(x => x.Name.To<RoleType>() == request.Role);
            
            if(role == null)
            {
                return ApiResult<IEnumerable<PermissionType>>.Ok(Enumerable.Empty<PermissionType>());
            }

            var permissions = role.Permissions
                .Select(x => x.Split('-')[0])
                .Distinct().Select(x => x.To<PermissionType>());

            return ApiResult<IEnumerable<PermissionType>>.Ok(permissions);
        }
    }
}
