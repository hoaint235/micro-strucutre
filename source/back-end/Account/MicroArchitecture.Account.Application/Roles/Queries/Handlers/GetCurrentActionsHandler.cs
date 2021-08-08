using MediatR;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Infrastructure.Commons.Extensions;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Roles.Queries.Handlers
{
    public class GetCurrentActionsHandler : IRequestHandler<GetCurrentActions, ApiResult<IEnumerable<ActionType>>>
    {
        private IAppContext _appContext;

        public GetCurrentActionsHandler(IAppContext appContext)
        {
            _appContext = appContext;
        }

        public async Task<ApiResult<IEnumerable<ActionType>>> Handle(GetCurrentActions request, CancellationToken cancellationToken)
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
