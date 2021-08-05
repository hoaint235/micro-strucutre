using MediatR;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Domain.Accounts.Specifications;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Accounts.Commands.Handlers
{
    public class UpdateStatusHandler : IRequestHandler<UpdateStatus, ApiResult<Unit>>
    {
        private readonly IAccountRepository _accountRepository;

        public UpdateStatusHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<ApiResult<Unit>> Handle(UpdateStatus request, CancellationToken cancellationToken)
        {
            var user = await _accountRepository.FindAsync(new EmailSpecification(request.Email));
            user.UpdateStatus(request.Status);
            _accountRepository.Update(user);
            await _accountRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
