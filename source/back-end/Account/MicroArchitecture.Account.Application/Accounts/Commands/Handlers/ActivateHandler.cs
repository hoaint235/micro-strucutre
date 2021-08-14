using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Accounts.Commands.Handlers
{
    public class ActivateHandler : IRequestHandler<Activate, ApiResult<Unit>>
    {
        private readonly IAccountRepository _userRepository;

        public ActivateHandler(IAccountRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ApiResult<Unit>> Handle(Activate request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetAsync(request.UserId);
            user.Activate();
            _userRepository.Update(user);
            await _userRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}