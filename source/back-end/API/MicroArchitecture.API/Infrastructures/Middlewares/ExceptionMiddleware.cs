using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace MicroArchitecture.API.Infrastructures.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next
            , ILogger<ExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error request");
                await HandleException(ex, httpContext);
            }
        }

        private static async Task HandleException(Exception ex, HttpContext httpContext)
        {
            httpContext.Response.StatusCode = ex switch
            {
                _ => (int)HttpStatusCode.InternalServerError
            };

            await httpContext.Response.WriteAsync(ex.Message);
        }
    }
}
