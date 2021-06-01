﻿using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Serilog.Context;

namespace MicroArchitecture.Account.API.Infrastructures.Extensions
{
    public static class HttpContextExtension
    {
        public static void SetHeader(this HttpContext httpContext, string key, string value, string log)
        {
            var request = httpContext.Request.Headers[key].FirstOrDefault();

            if (string.IsNullOrWhiteSpace(request))
            {
                request = value;
                httpContext.Response.Headers.Add(key, request);
                LogContext.PushProperty(log, request);
            }
        }
  
        public static bool TryGetRouteValue<TResult>(this ActionExecutingContext context, string argument,
            out TResult result)
        {
            result = default;
            var arguments = context.RouteData.Values;
            if (!arguments.ContainsKey(argument))
            {
                return false;
            }

            result = (TResult)TypeDescriptor.GetConverter(typeof(TResult))
                .ConvertFromInvariantString(arguments[argument]?.ToString());
            return true;
        }

        private static async Task WriteErrorMessageToResponse(HttpContext context, object error, int code)
        {
            var jsonError = JsonConvert.SerializeObject(error, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
            context.Response.StatusCode = code;
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(jsonError);
        }
    }
}
