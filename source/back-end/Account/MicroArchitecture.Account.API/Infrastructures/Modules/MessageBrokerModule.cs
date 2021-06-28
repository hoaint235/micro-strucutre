using MassTransit;
using MicroArchitecture.Account.Application.User.Commands;
using MicroArchitecture.Account.Application.User.IntegrationEvents;
using MicroArchitecture.Account.Domain.Core.Events;
using MicroArchitecture.Account.Infrastructure.Commons;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Reflection;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
  public class MessageBrokerModule : IAppModule
  {
    public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
    {
      var brokerConfig = new MessageBrokerConfig();
      configuration.GetSection(Constants.Common.MessageBrokerConfig).Bind(brokerConfig);

      service.AddMassTransit(x =>
      {
        x.AddConsumers(assemblies);

        x.UsingRabbitMq((context, cfg) =>
              {
                cfg.Host(brokerConfig.Host, h =>
                      {
                        h.Username(brokerConfig.UserName);
                        h.Password(brokerConfig.Password);
                      });

                cfg.ReceiveEndpoint("event-received", (endpoint) =>
                {
                  var consumerTypes = assemblies.SelectMany(x => x.GetTypes()
                             .Where(type => type.GetInterfaces()
                             .Where(x => x.IsGenericType && x.GetGenericTypeDefinition() == typeof(IConsumer<>)).Any()));
                  foreach (var consumerType in consumerTypes)
                  {
                    endpoint.Consumer(consumerType, type => Activator.CreateInstance(consumerType));
                  }

                });
              });
      });

      service.AddMassTransitHostedService();
    }
  }
}
