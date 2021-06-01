using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class EmailModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            //service.AddScoped<IEmailBodyRender, HandlerbarsRender>();
            //service.AddScoped<IEmailService, SmtpEmailService>();
        }
    }
}
