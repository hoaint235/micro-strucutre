using System.Linq;
using Microsoft.AspNetCore.Http;

namespace MicroArchitecture.Account.API.Infrastructures.Extensions
{
    public static class HttpContextAccessorExtension
    {
        public static bool IsAuthenticated(this IHttpContextAccessor httpContextAccessor) => httpContextAccessor?.HttpContext?.User?.Identity?.IsAuthenticated ?? false;

        public static string GetClaimValue(this IHttpContextAccessor httpContextAccessor, string key) =>
            httpContextAccessor?.HttpContext?.User?.Claims?.FirstOrDefault(x => x.Type == key)?.Value;
    }
}
