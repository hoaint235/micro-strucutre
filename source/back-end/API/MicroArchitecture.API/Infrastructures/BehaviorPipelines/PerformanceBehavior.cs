using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.API.Infrastructure.Commons;
using MicroArchitecture.API.Infrastructure.Commons.Extensions;
using Microsoft.Extensions.Logging;
using Serilog.Context;

namespace MicroArchitecture.API.Infrastructures.BehaviorPipelines
{
    public class PerformanceBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    {
        private readonly ILogger _logger;

        public PerformanceBehavior(ILogger<PerformanceBehavior<TRequest
            , TResponse>> logger)
        {
            _logger = logger;
        }

        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
        {
            var commandName = request.GetGenericTypeName();
            _logger.LogInformation("----- Begin command {CommandName} ({@Command})", commandName, request);

            var watch = new Stopwatch();
            watch.Start();
            var response = await next();
            watch.Stop();

            _logger.LogInformation("----- Command {CommandName} handled", commandName);
            var time = watch.ElapsedMilliseconds;
            using (LogContext.PushProperty("ElapsedTime", time))
            {
                if (time >= Constants.Common.TimeHandleSlow)
                {
                    _logger.LogWarning("Time handle of method slow: {@ExecuteTime} ms", watch.ElapsedMilliseconds);
                }
            }

            return response;
        }
    }
}
