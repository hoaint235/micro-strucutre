using MediatR;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Accounts.Commands.Handlers
{
    public class DeleteHandler : IRequestHandler<Delete, ApiResult<Unit>>
    {
        private readonly IAccountRepository _accountRepository;

        public DeleteHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<ApiResult<Unit>> Handle(Delete request, CancellationToken cancellationToken)
        {
            var user = await _accountRepository.GetAsync(request.UserId);
            user.Deleted();
            _accountRepository.Delete(user);
            await _accountRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
