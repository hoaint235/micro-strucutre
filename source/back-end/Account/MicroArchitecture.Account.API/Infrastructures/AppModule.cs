using System;
using System.Linq;
using MicroArchitecture.Account.Application.Account.Commands;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Infrastructure.Database.DbContext;
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
                typeof(Startup),
                typeof(Login),
                typeof(IAggregateRoot),
                typeof(AccountDbContext)
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
