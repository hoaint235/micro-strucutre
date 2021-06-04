using Amazon.CognitoIdentityProvider.Model;
using AutoMapper;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;

namespace MicroArchitecture.Account.Infrastructure.Services.Authentication
{
    public class AuthenticationProfile : Profile
    {
        public AuthenticationProfile()
        {
            CreateMap<AuthenticationResultType, AuthenResult>();
        }
    }
}
