using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace MicroArchitecture.Core.Interfaces
{
    public interface IAppModule
    {
        void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies);
    }
}
