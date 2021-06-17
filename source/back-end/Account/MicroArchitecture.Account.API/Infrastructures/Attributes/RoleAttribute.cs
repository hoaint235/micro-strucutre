using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Extensions;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.AppContext;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Attributes
{
    public class RoleAttribute : Attribute, IAsyncActionFilter
    {
        private readonly IEnumerable<RoleType> _roles;

        public RoleAttribute(params RoleType[] roles)
        {
            if (!roles.Any())
            {
                throw new InvalidOperationException("Must has one or more than role");
            }

            _roles = roles;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var appContext = context.HttpContext.RequestServices.GetRequiredService<IAppContext>();

            var roles = Domain.Roles.Role.GetDefaultData().Where(x => _roles.Contains(x.Type));

            var currentUser = await appContext.GetCurrentUserAsync();
            var contains = currentUser.Roles.Any(x => roles.Select(y => y.Id).Contains(x));

            if (contains)
            {
                await next();
                return;
            }

            await context.HttpContext.Forbidden(Constants.ErrorCode.InvalidPermission);
        }
    }
}
