using System;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Extensions;
using MicroArchitecture.Account.Domain.Core.AppContext;
using Microsoft.AspNetCore.Http;
using Serilog.Context;
using Constants = MicroArchitecture.Account.Infrastructure.Commons.Constants;

namespace MicroArchitecture.Account.API.Infrastructures.Middlewares
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
