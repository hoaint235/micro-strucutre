using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Services.Authentication;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Account.Commands.Handlers
{
    public class ChangeFirstTimeHandler : IRequestHandler<ChangeFirstTime, ApiResult<Unit>>
    {
        private readonly IAuthenticationService _authenticationService;

        public ChangeFirstTimeHandler(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        public async Task<ApiResult<Unit>> Handle(ChangeFirstTime request, CancellationToken cancellationToken)
        {
            await _authenticationService.ChangePasswordFirstTimeAsync(request.Certificate, request.Session);
                
            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
