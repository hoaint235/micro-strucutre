using MediatR;
using MicroArchitecture.API.Domain.Core.AppContext;
using MicroArchitecture.API.Domain.Roles;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Roles.Queries
{
    public class GetRoles
    {
        public class Request : IRequest<ApiResult<IEnumerable<CurrentUserRole>>>
        { }

        public class Handler : IRequestHandler<Request, ApiResult<IEnumerable<CurrentUserRole>>>
        {
            private readonly IAppContext _appContext;

            public Handler(IAppContext appContext)
            {
                _appContext = appContext;
            }

            public async Task<ApiResult<IEnumerable<CurrentUserRole>>> Handle(Request request, CancellationToken cancellationToken)
            {
                var currentUser = await _appContext.GetCurrentUserAsync();
                var excludeRole = new List<Role>();
                //if(currentUser.Roles.Any(x => x.Name == Constants.Role.Admin))
                //{
                //    excludeRole.Add(new Role)
                //}
                Role.List().Except(new List<Role> { });
                return ApiResult<IEnumerable<CurrentUserRole>>.Ok(currentUser.Roles);
            }
        }
    }
}
