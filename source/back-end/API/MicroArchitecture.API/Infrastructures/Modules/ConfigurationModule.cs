using System.Reflection;
using MicroArchitecture.API.Infrastructure.Commons;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using MicroArchitecture.API.Infrastructure.Services.Email.Models;
using MicroArchitecture.API.Infrastructure.Services.UserManager.Models;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.API.Infrastructures.Modules
{
    public class ConfigurationModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            service.Configure<SmtpConfiguration>(configuration.GetSection(Constants.Common.EmailConfig));
            service.Configure<AwsConfig>(configuration.GetSection(Constants.Common.AwsConfig));
            service.Configure<MessageBrokerConfig>(configuration.GetSection(Constants.Common.AwsConfig));
        }
    }
}
