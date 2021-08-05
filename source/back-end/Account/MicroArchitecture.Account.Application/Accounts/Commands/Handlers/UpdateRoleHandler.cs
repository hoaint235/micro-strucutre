using MediatR;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Accounts.Commands.Handlers
{
    public class UpdateRoleHandler : IRequestHandler<UpdateRole, ApiResult<Unit>>
    {
        private readonly IAccountRepository _accountRepository;

        public UpdateRoleHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<ApiResult<Unit>> Handle(UpdateRole request, CancellationToken cancellationToken)
        {
            var user = await _accountRepository.GetAsync(request.UserId);
            user.UpdateRoles(request.RoleIds);
            _accountRepository.Update(user);
            await _accountRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
