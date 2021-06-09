using System;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Extensions;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Infrastructure.Commons;
using Microsoft.AspNetCore.Http;
using Serilog.Context;

namespace MicroArchitecture.Account.API.Infrastructures.Middlewares
{
    public class TracerMiddlewares
    {
        private readonly RequestDelegate _next;

        public TracerMiddlewares(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext, IAppContext appContext)
        {
            var correlationId = Guid.NewGuid().ToString();
            var requestId = Guid.NewGuid().ToString();

            httpContext.SetHeader(Constants.Common.XCorrelationId, correlationId, "CorrelationId");
            httpContext.SetHeader(Constants.Common.XRequestId, requestId, "RequestId");

            if(httpContext.Request.Headers.TryGetValue(Constants.Common.AuthorizationHeader, out var token))
            {
                appContext.SetAccessToken(token.ToString().Replace("Bearer","").Trim());
            }

            using (LogContext.PushProperty("CorrelationId", correlationId))
            {
                using (LogContext.PushProperty("RequestId", requestId))
                {
                    await _next(httpContext);
                }
            }
        }
    }
}
