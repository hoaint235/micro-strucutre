using MediatR;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Account.Commands
{
    public class Login : IRequest<ApiResult<UserSignIned>>
    {
        public UserCertificate Certificate { get; set; }
    }
}
