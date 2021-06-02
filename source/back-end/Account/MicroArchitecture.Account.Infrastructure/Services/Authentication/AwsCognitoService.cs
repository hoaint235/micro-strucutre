using System;
using System.Threading.Tasks;
using Amazon;
using Amazon.CognitoIdentityProvider;
using Amazon.CognitoIdentityProvider.Model;
using MicroArchitecture.Account.Domain.Services.Authentication;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;
using MicroArchitecture.Account.Infrastructure.Services.Authentication.Models;
using Microsoft.Extensions.Options;

namespace MicroArchitecture.Account.Infrastructure.Services.Authentication
{
    public class AwsCognitoService : IAuthenticationService
    {
        private readonly IAmazonCognitoIdentityProvider _providerClient;
        private readonly CognitoConfiguration _config;

        public AwsCognitoService(IOptions<CognitoConfiguration> options)
        {
            _providerClient = new AmazonCognitoIdentityProviderClient(RegionEndpoint.SAEast1);
            _config = options?.Value;
        }


        public async Task<UserSignIned> LoginAsync(UserCertificate user)
        {
            var request = new InitiateAuthRequest
            {
                AuthFlow = AuthFlowType.USER_PASSWORD_AUTH,
                ClientId = _config.ClientId,
            };

            request.AuthParameters.Add("USERNAME", user.Email);
            request.AuthParameters.Add("PASSWORD", user.Password);
            request.AuthParameters.Add("SECRET_HASH", GetSecretHash(user.Email));
            var result = await _providerClient.InitiateAuthAsync(request);
            return new UserSignIned
            {
                AccessToken = result.AuthenticationResult.AccessToken,
                Status = result.ChallengeName.Value
            };
        }

        public async Task ForgotPasswordAsync(string email)
        {
            var request = new ForgotPasswordRequest
            {
                ClientId = _config.ClientId,
                Username = email,
                SecretHash = GetSecretHash(email)
            };
            await _providerClient.ForgotPasswordAsync(request);
        }

        public async Task ChangePasswordFirstTimeAsync(UserCertificate user)
        {
            await _providerClient.AdminSetUserPasswordAsync(new AdminSetUserPasswordRequest
            {
                Username = user.Email,
                Password = user.Password,
                Permanent = false,
                UserPoolId = _config.PoolId
            });
        }

        public async Task ConfirmationPasswordAsync(UserCertificate user, string code)
        {
            var request = new ConfirmForgotPasswordRequest
            {
                ClientId = _config.ClientId,
                Username = user.Email,
                SecretHash = GetSecretHash(user.Email),
                ConfirmationCode = code,
                Password = user.Password
            };
            await _providerClient.ConfirmForgotPasswordAsync(request);
        }

        private string GetSecretHash(string email)
        {
            var data = $"{email}{_config.ClientId}{_config.ClientSecret}";
            using var sha = new System.Security.Cryptography.SHA256Managed();
            var textData = System.Text.Encoding.UTF8.GetBytes(data);
            var hash = sha.ComputeHash(textData);
            return BitConverter.ToString(hash).Replace("-", string.Empty);
        }
    }
}
