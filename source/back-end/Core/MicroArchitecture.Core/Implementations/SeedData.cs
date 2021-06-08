using DbUp;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Reflection;

namespace MicroArchitecture.Core.Implementations
{
    public class SeedData
    {
        public static void Initialize(IWebHost host, string connectionString)
        {
            Console.WriteLine(@"Seeding database...");

            using (var scope = host.Services.CreateScope())
            {
                var serviceProvider = scope.ServiceProvider;
                var configuration = serviceProvider.GetRequiredService<IConfiguration>();
                var connectString = configuration.GetConnectionString(connectionString);
                MigrationScripts(connectString);
            }

            Console.WriteLine(@"Done seeding database.");
        }

        private static void MigrationScripts(string connectionString)
        {
            EnsureDatabase.For.SqlDatabase(connectionString);
            var upgrade =
                DeployChanges.To
                    .SqlDatabase(connectionString)
                    .WithScriptsEmbeddedInAssembly(Assembly.GetExecutingAssembly())
                    .LogToConsole()
                    .Build();

            var result = upgrade.PerformUpgrade();
            if (result.Successful)
            {
                Console.WriteLine(@"Migration scripts successfully");
            }
        }
    }
}
