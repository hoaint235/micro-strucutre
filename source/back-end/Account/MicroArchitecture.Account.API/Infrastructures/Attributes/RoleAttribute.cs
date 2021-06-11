using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Extensions;
using MicroArchitecture.Account.Domain.Commons;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Attributes
{
    public class RoleAttribute : Attribute, IAsyncActionFilter
    {
        private readonly IEnumerable<Type> _types;

        public RoleAttribute(params Type[] policies)
        {
            _types = policies;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var serviceProvider = context.HttpContext.RequestServices;

            foreach (var type in _types)
            {
                var policy = ActivatorUtilities.CreateInstance(serviceProvider, type) as Domain.Policies.IRole;

                var isValid = await policy.ExecuteAsync();
                if (!isValid)
                {
                    await context.HttpContext.Forbidden(Constants.ErrorCode.InvalidPermission);
                    return;
                }
            }

            await next();
        }
    }
}
