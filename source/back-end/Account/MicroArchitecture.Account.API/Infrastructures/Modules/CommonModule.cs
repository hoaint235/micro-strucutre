using System.Reflection;
using AutoMapper;
using FluentValidation;
using MediatR;
using MicroArchitecture.Account.API.Infrastructures.BehaviorPipelines;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Infrastructure.Services.UserManager;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
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
