using MassTransit;
using MicroArchitecture.API.Infrastructure.Commons;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using System.Reflection;

namespace MicroArchitecture.API.Infrastructures.Modules
{
    public class MessageBrokerModule : IAppModule
    {
        [System.Obsolete]
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            var brokerConfig = new MessageBrokerConfig();
            configuration.GetSection(Constants.Common.MessageBrokerConfig).Bind(brokerConfig);
            service.AddMassTransit(x =>
            {
                x.AddConsumers(assemblies);

                x.UsingRabbitMq((context, cfg) =>
                {
                    cfg.UseHealthCheck(context);
                    cfg.Host(brokerConfig.Host, h =>
                    {
                        h.Username(brokerConfig.UserName);
                        h.Password(brokerConfig.Password);
                    });

                    cfg.ReceiveEndpoint("event-received", e =>
              {
                  var consumerTypes = assemblies.SelectMany(x => x.GetTypes())
                      .Where(x => x.GetInterfaces().Where(x => x.IsGenericType
                          && x.GetGenericTypeDefinition() == typeof(IConsumer<>)).Any())
                      .ToList();

                  foreach (var consumerType in consumerTypes)
                  {
                      e.ConfigureConsumer(context, consumerType);
                  }

              });
                });
            });

            service.AddMassTransitHostedService();
        }
    }
}
