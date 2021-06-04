using System;
using System.Threading.Tasks;
using Amazon.CognitoIdentityProvider;
using Amazon.CognitoIdentityProvider.Model;
using AutoMapper;
using MicroArchitecture.Account.Domain.Services.Authentication;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;
using MicroArchitecture.Account.Infrastructure.Services.Authentication.Models;
using Microsoft.Extensions.Options;

namespace MicroArchitecture.Account.Infrastructure.Services.Authentication
{
    public class AwsCognitoService : IAuthenticationService
    {
        private const string NewPasswordRequired = "NEW_PASSWORD_REQUIRED";
        private const string UserName = "USERNAME";
        private const string Password = "PASSWORD";
        private const string NewPassword = "NEW_PASSWORD";
        
        private readonly IAmazonCognitoIdentityProvider _providerClient;
        private readonly CognitoConfiguration _config;
        private readonly IMapper _mapper;

        public AwsCognitoService(IOptions<CognitoConfiguration> options
            , IAmazonCognitoIdentityProvider providerClient
            , IMapper mapper)
        {
            _providerClient = providerClient;
            _mapper = mapper;
            _config = options?.Value;
        }


        public async Task<UserAuthenticated> LoginAsync(UserCertificate user)
        {
            var request = new InitiateAuthRequest
            {
                AuthFlow = AuthFlowType.USER_PASSWORD_AUTH,
                ClientId = _config.ClientId,
            };

            request.AuthParameters.Add(UserName, user.Email);
            request.AuthParameters.Add(Password, user.Password);
            var response = await _providerClient.InitiateAuthAsync(request);
            var result = new UserAuthenticated(response.ChallengeName.Value, response.Session);
            
            if (response.ChallengeName != NewPasswordRequired)
            {
                result.AuthenResult = _mapper.Map<AuthenResult>(response.AuthenticationResult);
            }

            return result;
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

        public async Task<AuthenResult> ChangePasswordFirstTimeAsync(UserCertificate user, string session)
        {
            var request = new RespondToAuthChallengeRequest
            {
                ClientId = _config.ClientId,
                ChallengeName = NewPasswordRequired,
                Session = session
            };

            request.ChallengeResponses.Add(UserName, user.Email);
            request.ChallengeResponses.Add(NewPassword, user.Password);

            var response = await _providerClient.RespondToAuthChallengeAsync(request);

            return _mapper.Map<AuthenResult>(response.AuthenticationResult);
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
