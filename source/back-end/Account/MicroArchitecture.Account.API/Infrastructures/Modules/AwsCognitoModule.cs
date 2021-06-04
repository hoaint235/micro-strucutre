using System.Reflection;
using Amazon;
using Amazon.CognitoIdentityProvider;
using Amazon.Runtime;
using MicroArchitecture.Account.Domain.Services.Authentication;
using MicroArchitecture.Account.Infrastructure.Services.Authentication;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class AwsCognitoModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            AWSCredentials awsCredentials = new AnonymousAWSCredentials();

            var instance = new AmazonCognitoIdentityProviderClient(awsCredentials, RegionEndpoint.APSoutheast1);
            service.AddSingleton<IAmazonCognitoIdentityProvider>(instance);
            service.AddScoped<IAuthenticationService, AwsCognitoService>();
        }
    }
}
