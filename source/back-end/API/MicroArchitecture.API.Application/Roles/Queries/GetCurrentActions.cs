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
    public class GetCurrentActions
    {
        public class Request : IRequest<ApiResult<IEnumerable<ActionType>>>
        {
            public RoleType Role { get; set; }
            public PermissionType Permission { get; set; }
        }

        public class Handler : IRequestHandler<Request, ApiResult<IEnumerable<ActionType>>>
        {
            private readonly IAppContext _appContext;

            public Handler(IAppContext appContext)
            {
                _appContext = appContext;
            }

            public async Task<ApiResult<IEnumerable<ActionType>>> Handle(Request request, CancellationToken cancellationToken)
            {
                var currentUser = await _appContext.GetCurrentUserAsync();
                var role = currentUser.Roles.FirstOrDefault(x => x.Name.To<RoleType>() == request.Role);

                if (role == null)
                {
                    return ApiResult<IEnumerable<ActionType>>.Ok(Enumerable.Empty<ActionType>());
                }

                var actions = role.Permissions
                    .Where(x => x.Split('-')[0].To<PermissionType>() == request.Permission)
                    .Select(x => x.Split('-')[1].To<ActionType>());

                return ApiResult<IEnumerable<ActionType>>.Ok(actions);
            }
        }
    }
}
