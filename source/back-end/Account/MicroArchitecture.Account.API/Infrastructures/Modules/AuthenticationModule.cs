using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class AuthenticationModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            //var authConfig = new AuthenticationConfiguration();
            //configuration.GetSection(Constants.Common.AuthConfig).Bind(authConfig);

            //var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(authConfig.Secret));
            //JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            //service.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //}).AddJwtBearer(o =>
            //{
            //    o.Authority = authConfig.IdentityServer; // configuration["Authentication:IdentityServer"];
            //    o.Audience = authConfig.Audience; // configuration["Authentication:Audience"];
            //    o.RequireHttpsMetadata = false;
            //    o.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        ValidateIssuerSigningKey = true,
            //        IssuerSigningKey = signingKey,
            //        RoleClaimType = "sub",
            //    };
            //});

            //services.AddAuthorization(options =>
            //{
            //    options.AddPolicy(Policies.ADMIN_PERMISSION, policy =>
            //        policy.RequireAssertion(context => context.User.HasClaim(c =>
            //            (c.Type == ClientClaimTypes.USER_TYPE && c.Value == ClientClaimTypes.ADMIN))
            //        )
            //    );
            //});
        }
    }
}
