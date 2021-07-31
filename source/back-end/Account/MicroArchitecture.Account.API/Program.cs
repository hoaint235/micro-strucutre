using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Reflection;
using Microsoft.AspNetCore;
using Serilog;
using MicroArchitecture.Core.Implementations;
using MicroArchitecture.Account.Infrastructure.Commons;

namespace MicroArchitecture.Account.API
{
    public class Program
    {
        public static int Main(string[] args)
        {
            try
            {
                Console.WriteLine(@"Starting application");
                var host = CreateHostBuilder(args);
                SeedData.Initialize(host, Assembly.GetExecutingAssembly(),  Constants.Common.ConnectionString, IProvider.Ngsql);

                Console.WriteLine(@"Start host");
                host.Run();
                return 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Log.Fatal(ex, "Host terminated unexpectedly");
                return 1;
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IWebHost CreateHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseSerilog()
                .UseStartup<Startup>()
                .ConfigureAppConfiguration((hostContext, options) =>
                {
                    options.AddJsonFile("appsettings.json", true, true);
                    options.AddJsonFile($"appsettings.{hostContext.HostingEnvironment.EnvironmentName}.json", true, false);
                    options.AddJsonFile("logging-default/serilog.json", true, false);
                    options.AddEnvironmentVariables();
                    options.AddCommandLine(args);
                })
                .UseSerilog((hostingContext, loggerConfiguration) =>
                {
                    loggerConfiguration
                        .ReadFrom.Configuration(hostingContext.Configuration)
                        .Enrich.FromLogContext();
                })
                .ConfigureLogging(loggingBuilder =>
                {
                    loggingBuilder.ClearProviders();
                    loggingBuilder.AddSerilog();
                })
                .Build();
    }
}
