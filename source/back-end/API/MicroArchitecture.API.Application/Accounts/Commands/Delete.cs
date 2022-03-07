using MediatR;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Accounts.Commands
{
    public class Delete
    {
        public class Command : IRequest<ApiResult<Unit>>
        {
            public Guid UserId { get; set; }
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
                var user = await _accountRepository.GetAsync(request.UserId);
                user.Deleted();
                _accountRepository.Delete(user);
                await _accountRepository.UnitOfWork.CommitAsync();

                return ApiResult<Unit>.Ok(Unit.Value);
            }
        }
    }
}
