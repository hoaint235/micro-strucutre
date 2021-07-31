using System.Reflection;
using MicroArchitecture.Account.Infrastructure.Commons;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class HealthCheckModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            var connectionString = configuration.GetConnectionString(Constants.Common.ConnectionString);
            service.AddHealthChecks()
                .AddNpgSql(connectionString, name: "Postgresql", failureStatus: HealthStatus.Unhealthy);
            service.AddHealthChecksUI(opt =>
                {
                    opt.SetEvaluationTimeInSeconds(15); //time in seconds between check
                    opt.MaximumHistoryEntriesPerEndpoint(60); //maximum history of checks
                    opt.SetApiMaxActiveRequests(1); //api requests concurrency

                    opt.AddHealthCheckEndpoint("default api", "/healthcheck"); //map health check api
                })
                .AddInMemoryStorage();
        }
    }
}
