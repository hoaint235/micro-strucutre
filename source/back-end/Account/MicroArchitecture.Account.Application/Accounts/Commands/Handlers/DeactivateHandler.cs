using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Accounts.Commands.Handlers
{
    public class DeactivateHandler : IRequestHandler<Deactivate, ApiResult<Unit>>
    {
        private readonly IAccountRepository _accountRepository;

        public DeactivateHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<ApiResult<Unit>> Handle(Deactivate request, CancellationToken cancellationToken)
        {
            var user = await _accountRepository.GetAsync(request.UserId);
            user.Deactivate();
            _accountRepository.Update(user);
            await _accountRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
