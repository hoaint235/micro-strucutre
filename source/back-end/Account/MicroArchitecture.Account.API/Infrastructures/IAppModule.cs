using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures
{
    public interface IAppModule
    {
        void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies);
    }
}
