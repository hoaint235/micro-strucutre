using System.Reflection;
using AutoMapper;
using FluentValidation;
using MediatR;
using MicroArchitecture.API.Domain.Core.AppContext;
using MicroArchitecture.API.Domain.Services.UserManager;
using MicroArchitecture.API.Infrastructure.Services.UserManager;
using MicroArchitecture.API.Infrastructures.BehaviorPipelines;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MicroArchitecture.API.Infrastructures.Modules
{
    public class CommonModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            service.AddMediatR(assemblies);
            service.AddAutoMapper(assemblies);
            service.AddValidatorsFromAssemblies(assemblies);

            service.AddScoped<IAppContext, AppContext>();
            service.AddScoped<IUserManager, AwsCognitoService>();
            service.AddScoped(typeof(IPipelineBehavior<,>), typeof(PerformanceBehavior<,>));

            service.AddControllersWithViews();
            service.AddHttpContextAccessor();
            service.AddControllers()
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    options.SerializerSettings.DefaultValueHandling = DefaultValueHandling.Include;
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                });
        }
    }
}
