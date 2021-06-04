using MediatR;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Account.Commands
{
    public class ChangeFirstTime : IRequest<ApiResult<Unit>>
    {
        public UserCertificate Certificate { get; set; }
        public string Session { get; set; }
    }
}
