using System;
using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Core.AppContext;
using MicroArchitecture.API.Infrastructures.Extensions;
using Microsoft.AspNetCore.Http;
using Serilog.Context;
using Constants = MicroArchitecture.API.Infrastructure.Commons.Constants;

namespace MicroArchitecture.API.Infrastructures.Middlewares
{
    public class TracerMiddleware
    {
        private readonly RequestDelegate _next;

        public TracerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext, IAppContext appContext)
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
