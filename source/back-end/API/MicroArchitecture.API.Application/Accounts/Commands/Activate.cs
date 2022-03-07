using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Infrastructure.Commons.Models;

namespace MicroArchitecture.API.Application.Accounts.Commands
{
    public class Activate
    {
        public class Command : IRequest<ApiResult<Unit>>
        {
            public Guid UserId { get; set; }
        }

        public class Handler : IRequestHandler<Command, ApiResult<Unit>>
        {
            private readonly IAccountRepository _userRepository;

            public Handler (IAccountRepository userRepository)
            {
                _userRepository = userRepository;
            }

            public async Task<ApiResult<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _userRepository.GetAsync(request.UserId);
                user.Activate();
                _userRepository.Update(user);
                await _userRepository.UnitOfWork.CommitAsync();

                return ApiResult<Unit>.Ok(Unit.Value);
            }
        }
    }
}