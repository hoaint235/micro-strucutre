using MassTransit;
using MicroArchitecture.Account.Application.User.IntegrationEvents;
using MicroArchitecture.Account.Infrastructure.Commons;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
                x.AddConsumer<UserCreatedEventHandler>();

                x.UsingRabbitMq((context, cfg) =>
                {
                    cfg.Host(brokerConfig.Host, h =>
                    {
                        h.Username(brokerConfig.UserName);
                        h.Password(brokerConfig.Password);
                    });

                    cfg.ReceiveEndpoint("event-listener", e =>
                    {
                        e.ConfigureConsumer<UserCreatedEventHandler>(context);
                    });
                });
            });

            service.AddMassTransitHostedService();
        }
    }
}
