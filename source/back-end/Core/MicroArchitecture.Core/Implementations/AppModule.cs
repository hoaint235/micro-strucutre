using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace MicroArchitecture.Core.Implementations
{
    public static class AppModule
    {
        public static void AddModules(this IServiceCollection services, IConfiguration configuration, Type[] types)
        {
            var assemblies = types.Select(x => x.Assembly).ToArray();
            var allTypes = types.SelectMany(x => x.Assembly.GetTypes()).ToArray();
            var appModule = typeof(IAppModule);

            var moduleTypes = allTypes.Where(x => appModule.IsAssignableFrom(x) && !x.IsInterface).ToList();
            moduleTypes.ForEach(type =>
            {
                var module = Activator.CreateInstance(type) as IAppModule;
                module?.RegisterServices(services, configuration, assemblies);
            });
        }
    }
}
