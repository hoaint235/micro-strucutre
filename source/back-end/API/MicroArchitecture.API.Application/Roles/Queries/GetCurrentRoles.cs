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
    public class GetCurrentRoles
    {
        public class Request : IRequest<ApiResult<IEnumerable<RoleType>>>
        { }

        public class Handler : IRequestHandler<Request, ApiResult<IEnumerable<RoleType>>>
        {
            private readonly IAppContext _appContext;

            public Handler(IAppContext appContext)
            {
                _appContext = appContext;
            }

            public async Task<ApiResult<IEnumerable<RoleType>>> Handle(Request request, CancellationToken cancellationToken)
            {
                var currentUser = await _appContext.GetCurrentUserAsync();
                return ApiResult<IEnumerable<RoleType>>.Ok(currentUser.Roles.Select(x => x.Name.To<RoleType>()));
            }
        }
    }
}
