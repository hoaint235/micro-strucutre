using System.Reflection;
using MicroArchitecture.Account.Infrastructure.Commons;
using MicroArchitecture.Account.Infrastructure.Services.Authentication.Models;
using MicroArchitecture.Account.Infrastructure.Services.Email.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class ConfigurationModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            service.Configure<SmtpConfiguration>(configuration.GetSection(Constants.Common.EmailConfig));
            service.Configure<CognitoConfiguration>(configuration.GetSection(Constants.Common.CognitoConfig));
        }
    }
}
