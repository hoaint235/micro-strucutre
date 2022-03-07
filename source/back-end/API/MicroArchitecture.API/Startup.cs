using HealthChecks.UI.Client;
using MicroArchitecture.API.Application.Accounts.Queries;
using MicroArchitecture.API.Domain.Core.Domain;
using MicroArchitecture.API.Infrastructure.Commons;
using MicroArchitecture.API.Infrastructure.Database.DbContext;
using MicroArchitecture.API.Infrastructures.Middlewares;
using MicroArchitecture.Core.Implementations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace MicroArchitecture.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy(Constants.Common.AllowAllPolicy, builder =>
            {
                builder.AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .SetIsOriginAllowed((host) => true);
            }));

            var types = new[]
            {
                typeof(Startup),
                typeof(ListUsers),
                typeof(IAggregateRoot),
                typeof(AccountDbContext)
            };

            services.AddModules(Configuration, types);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMiddleware<TracerMiddleware>();

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseCors(Constants.Common.AllowAllPolicy);
            app.UseMiddleware<ExceptionMiddleware>();

            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseMiddleware<AuthorizeMiddleware>();

            app.UseHealthChecks("/healthcheck", new HealthCheckOptions()
            {
                Predicate = _ => true,
                ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
            });
            app.UseHealthChecksUI();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
                endpoints.MapHealthChecks("/health").RequireAuthorization();
            });
        }
    }
}
