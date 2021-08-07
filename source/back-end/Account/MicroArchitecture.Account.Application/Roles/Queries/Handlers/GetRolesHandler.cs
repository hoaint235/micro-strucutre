using MediatR;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Roles.Queries.Handlers
{
    public class GetRolesHandler : IRequestHandler<GetRoles, ApiResult<IEnumerable<CurrentUserRole>>>
    {
        private readonly IAppContext _appContext;

        public GetRolesHandler(IAppContext appContext)
        {
            _appContext = appContext;
        }

        public async Task<ApiResult<IEnumerable<CurrentUserRole>>> Handle(GetRoles request, CancellationToken cancellationToken)
        {
            var currentUser = await _appContext.GetCurrentUserAsync();
            return ApiResult<IEnumerable<CurrentUserRole>>.Ok(currentUser.Roles);
        }
    }
}
