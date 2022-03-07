using System;
using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Core.AppContext;
using MicroArchitecture.API.Infrastructure.Database.Dapper;
using MicroArchitecture.API.Infrastructure.RawQueries;
using MicroArchitecture.API.Infrastructures.Extensions;
using Microsoft.AspNetCore.Http;
using Constants = MicroArchitecture.API.Infrastructure.Commons.Constants;

namespace MicroArchitecture.API.Infrastructures.Middlewares
{
    public class AuthorizeMiddleware
    {
        private readonly RequestDelegate _next;

        public AuthorizeMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext, IDapperQuery dapperQuery, IHttpContextAccessor httpContextAccessor, IAppContext appContext)
        {
            if (httpContextAccessor.IsAuthenticated())
            {
                var externalId = httpContextAccessor.GetClaimValue("sub");
                var query = UserQueries.GetCurrentUserId(externalId);

                var currentUserId = await dapperQuery.ExecuteScalarAsync<Guid?>(query.Query, query.Parameters);
                if (currentUserId == null)
                {
                    await httpContext.Unauthorized("User not authorize");
                    return;
                }

                appContext.SetCurrentUserId(currentUserId.GetValueOrDefault());
            }

            if (httpContext.Request.Headers.TryGetValue(Constants.Common.AuthorizationHeader, out var token))
            {
                appContext.SetAccessToken(token.ToString().Replace("Bearer", "").Trim());
            }

            await _next(httpContext);
        }
    }
}
