using MediatR;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Domain.Accounts.Specifications;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Accounts.Commands
{
    public class UpdateStatus
    {
        public class Command : IRequest<ApiResult<Unit>>
        {
            public string Email { get; set; }
            public AccountStatus Status { get; set; }
        }
        
        public class Handler : IRequestHandler<Command, ApiResult<Unit>>
        {
            private readonly IAccountRepository _accountRepository;

            public Handler(IAccountRepository accountRepository)
            {
                _accountRepository = accountRepository;
            }

            public async Task<ApiResult<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _accountRepository.FindAsync(new EmailSpecification(request.Email));
                user.UpdateStatus(request.Status);
                _accountRepository.Update(user);
                await _accountRepository.UnitOfWork.CommitAsync();

                return ApiResult<Unit>.Ok(Unit.Value);
            }
        }
    }
}
