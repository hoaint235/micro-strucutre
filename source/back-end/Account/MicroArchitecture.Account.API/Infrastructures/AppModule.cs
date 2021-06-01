using System;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures
{
    public static class AppModule
    {
        public static void AddModules(this IServiceCollection services, IConfiguration configuration)
        {
            var types = new[]
            {
                typeof(Startup)
            };

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
