using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Reflection;
using MicroArchitecture.Account.Infrastructure.Commons;
using MicroArchitecture.Account.Infrastructure.Services.UserManager.Models;
using MicroArchitecture.Core.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class AuthenticationModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            var authConfig = new AwsConfig();
            configuration.GetSection(Constants.Common.AwsConfig).Bind(authConfig);

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            service.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKeyResolver = (s, securityToken, identifier, parameters) =>
                    {
                        // Get JsonWebKeySet from AWS
                        var json = new WebClient().DownloadString(parameters.ValidIssuer + "/.well-known/jwks.json");
                        // Serialize the result
                        return JsonConvert.DeserializeObject<JsonWebKeySet>(json).Keys;
                    },
                    ValidateIssuer = true,
                    ValidIssuer = $"https://cognito-idp.{authConfig.Region}.amazonaws.com/{authConfig.PoolId}",
                    ValidateLifetime = true,
                    LifetimeValidator = (before, expires, token, param) => expires > DateTime.UtcNow,
                    ValidateAudience = true,
                    ValidAudience = authConfig.ClientId,
                };
            });

            service
                .AddAuthorization(options =>
                {
                    options.AddPolicy("Admin", policy => policy.RequireClaim("cognito:groups", new List<string> { "admin" }));
                    options.AddPolicy("User", policy => policy.RequireClaim("cognito:groups", new List<string> { "user" }));
                });
        }
    }
}
