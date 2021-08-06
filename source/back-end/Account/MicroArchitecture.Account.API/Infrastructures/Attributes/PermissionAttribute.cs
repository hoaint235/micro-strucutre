using MicroArchitecture.Account.API.Infrastructures.Extensions;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.AppContext;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.API.Infrastructures.Attributes
{
    public class PermissionAttribute : Attribute, IAsyncActionFilter
    {
        private PermissionType Permission { get; set; }
        private ActionType Action { get; set; }
        private IEnumerable<RoleType> Roles { get; set; }

        public PermissionAttribute(PermissionType permission, ActionType action, params RoleType[] roles)
        {
            Permission = permission;
            Action = action;
            Roles = roles;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var appContext = context.HttpContext.RequestServices.GetRequiredService<IAppContext>();
            var currentUser = await appContext.GetCurrentUserAsync();
            var permissionName = $"{Permission}-{Action}".ToLower();

            foreach (var role in Roles)
            {
                var isValid = currentUser.Roles.Any(x => x.Name.ToLower() == role.ToString().ToLower() && x.Permissions.Contains(permissionName));
                if (isValid)
                {
                    await next();
                    return;
                }
            }

            await context.HttpContext.Forbidden(Constants.ErrorCode.InvalidPermission);
        }
    }
}
