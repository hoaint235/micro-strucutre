using DbUp;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Reflection;

namespace MicroArchitecture.Core.Implementations
{
    public enum IProvider
    {
        SqlServer   = 0,
        Ngsql       = 1
    }

    public class SeedData
    {
        public static void Initialize(IWebHost host, Assembly assembly, string connectionString, IProvider provider)
        {
            Console.WriteLine(@"Seeding database...");

            using (var scope = host.Services.CreateScope())
            {
                var serviceProvider = scope.ServiceProvider;
                var configuration = serviceProvider.GetRequiredService<IConfiguration>();
                var connectString = configuration.GetConnectionString(connectionString);
                switch (provider)
                {
                    case IProvider.SqlServer:
                        MigrationSqlServerScripts(connectString, assembly); 
                        break;
                    case IProvider.Ngsql:
                        MigrationNgsqlScripts(connectString, assembly);
                        break;
                }
            }

            Console.WriteLine(@"Done seeding database.");
        }

        private static void MigrationNgsqlScripts(string connectionString, Assembly assembly)
        {
            EnsureDatabase.For.PostgresqlDatabase(connectionString);
            var upgrade =
                DeployChanges.To
                    .PostgresqlDatabase(connectionString)
                    .WithScriptsEmbeddedInAssembly(assembly)
                    .LogToConsole()
                    .Build();

            var result = upgrade.PerformUpgrade();
            if (result.Successful)
            {
                Console.WriteLine(@"Migration scripts successfully");
            }
        }

        private static void MigrationSqlServerScripts(string connectionString, Assembly assembly)
        {
            EnsureDatabase.For.SqlDatabase(connectionString);
            var upgrade =
                DeployChanges.To
                    .SqlDatabase(connectionString)
                    .WithScriptsEmbeddedInAssembly(assembly)
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
