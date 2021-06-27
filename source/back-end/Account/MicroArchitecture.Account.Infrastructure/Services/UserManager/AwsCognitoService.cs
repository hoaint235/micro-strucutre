using System.Threading;
using System.Threading.Tasks;
using Amazon;
using Amazon.CognitoIdentityProvider;
using Amazon.CognitoIdentityProvider.Model;
using Amazon.Runtime;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Domain.Services.UserManager.Models;
using MicroArchitecture.Account.Infrastructure.Services.UserManager.Models;
using Microsoft.Extensions.Options;
using Constants = MicroArchitecture.Account.Infrastructure.Commons.Constants;

namespace MicroArchitecture.Account.Infrastructure.Services.UserManager
{
    public class AwsCognitoService : IUserManager
    {
        private readonly IAppContext _appContext;
        private readonly IAmazonCognitoIdentityProvider _provider;
        private readonly AwsConfig _config;

        public AwsCognitoService(IOptions<AwsConfig> options
            , IAppContext appContext)
        {
            _appContext = appContext;
            _config = options.Value;
            _provider = Initialize();
        }

        public AmazonCognitoIdentityProviderClient Initialize()
        {
            var instance = new AmazonCognitoIdentityProviderClient(
                new BasicAWSCredentials(_config.Certificate.AccessKey, _config.Certificate.SecretKey)
                , RegionEndpoint.APSoutheast1);

            instance.BeforeRequestEvent += (sender, args) =>
            {
                var request = (WebServiceRequestEventArgs)args;
                request.Headers.Add(Constants.Common.AuthorizationHeader, _appContext.GetAccessToken());
            };

            return instance;
        }

        public async Task ListUsersAsync(CancellationToken cancellationToken = default)
        {
            var request = new ListUsersRequest
            {
                UserPoolId = _config.PoolId,
                Limit = 10
            };

            var result = await _provider.ListUsersAsync(request, cancellationToken);
        }

        public async Task DeactivateUserAsync(string userName)
        {
            await _provider.AdminDisableUserAsync(new AdminDisableUserRequest
            {
                UserPoolId = _config.PoolId,
                Username = userName
            });
        }

        public async Task ActivateUserAsync(string userName)
        {
            await _provider.AdminEnableUserAsync(new AdminEnableUserRequest
            {
                UserPoolId = _config.PoolId,
                Username = userName
            });
        }

        public async Task<string> CreateUserAsync(string email)
        {
            var request = new AdminCreateUserRequest
            {
                Username = email,
                UserPoolId = _config.PoolId,
                UserAttributes = new System.Collections.Generic.List<AttributeType>
                {
                    new AttributeType{ Name = "email_verified", Value = "true" },
                    new AttributeType{ Name = "email", Value = email }
                }
            };

            var response = await _provider.AdminCreateUserAsync(request);

            return response.User.Username;
        }

    }
}
