using System;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Extensions;
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

        public async Task Invoke(HttpContext httpContext)
        {
            var correlationId = Guid.NewGuid().ToString();
            var requestId = Guid.NewGuid().ToString();

            httpContext.SetHeader(Constants.Common.XCorrelationId, correlationId, "CorrelationId");
            httpContext.SetHeader(Constants.Common.XRequestId, requestId, "RequestId");

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
