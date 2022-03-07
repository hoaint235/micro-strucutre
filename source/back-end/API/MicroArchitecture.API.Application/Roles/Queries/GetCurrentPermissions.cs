using MediatR;
using MicroArchitecture.API.Domain.Commons;
using MicroArchitecture.API.Domain.Core.AppContext;
using MicroArchitecture.API.Infrastructure.Commons.Extensions;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Roles.Queries
{
    public class GetCurrentPermissions
    {
        public class Request : IRequest<ApiResult<IEnumerable<PermissionType>>>
        {
            public RoleType Role { get; set; }
        }

        public class Handler : IRequestHandler<Request, ApiResult<IEnumerable<PermissionType>>>
        {
            private IAppContext _appContext;

            public Handler(IAppContext appContext)
            {
                _appContext = appContext;
            }

            public async Task<ApiResult<IEnumerable<PermissionType>>> Handle(Request request, CancellationToken cancellationToken)
            {
                var currentUser = await _appContext.GetCurrentUserAsync();
                var role = currentUser.Roles.FirstOrDefault(x => x.Name.To<RoleType>() == request.Role);

                if (role == null)
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
}
