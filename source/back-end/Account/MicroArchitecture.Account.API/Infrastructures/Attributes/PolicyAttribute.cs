using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Extensions;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Attributes
{
    public class PolicyAttribute : Attribute, IAsyncActionFilter
    {
        private readonly IEnumerable<Type> _types;

        public PolicyAttribute(params Type[] policies)
        {
            _types = policies;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var serviceProvider = context.HttpContext.RequestServices;

            foreach (var type in _types)
            {
                var policy = ActivatorUtilities.CreateInstance(serviceProvider, type) as Domain.Policies.IPolicy;
                var properties = type.GetProperties().Where(x => x.SetMethod != null);
                foreach (var property in properties)
                {
                    if (context.TryGetRouteValue(property.Name, out Guid propertyValue))
                    {
                        property.GetSetMethod()?.Invoke(policy, new object[] { propertyValue });
                    }
                }

                var isValid = await policy.ExecuteAsync();
                if (!isValid)
                {
                    await context.HttpContext.Forbidden(policy.ErrorCode);
                    return;
                }
            }

            await next();
        }
    }
}
