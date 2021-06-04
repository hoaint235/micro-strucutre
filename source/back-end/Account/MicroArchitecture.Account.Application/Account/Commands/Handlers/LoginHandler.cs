using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Services.Authentication;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Account.Commands.Handlers
{
    public class LoginHandler : IRequestHandler<Login, ApiResult<UserSignIned>>
    {
        private readonly IAuthenticationService _authenticationService;

        public LoginHandler(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        public async Task<ApiResult<UserSignIned>> Handle(Login request, CancellationToken cancellationToken)
        {
            var result = await _authenticationService.LoginAsync(request.Certificate);
            return ApiResult<UserSignIned>.Ok(result);
        }
    }
}
