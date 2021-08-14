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
    public class GetCurrentRolesHandler : IRequestHandler<GetCurrentRoles, ApiResult<IEnumerable<RoleType>>>
    {
        private readonly IAppContext _appContext;

        public GetCurrentRolesHandler(IAppContext appContext)
        {
            _appContext = appContext;
        }

        public async Task<ApiResult<IEnumerable<RoleType>>> Handle(GetCurrentRoles request, CancellationToken cancellationToken)
        {
            var currentUser = await _appContext.GetCurrentUserAsync();
            return ApiResult<IEnumerable<RoleType>>.Ok(currentUser.Roles.Select(x => x.Name.To<RoleType>()));
        }
    }
}
