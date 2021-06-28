using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Domain.Users.Specifications;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Commands
{
    public class ChangePasswordFirstTimeHandler : IRequestHandler<ChangePasswordFirstTime, ApiResult<Unit>>
    {
        private readonly IUserRepository _userRepository;

        public ChangePasswordFirstTimeHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ApiResult<Unit>> Handle(ChangePasswordFirstTime request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.FindAsync(new EmailSpecification(request.UserName));
            user.Confirmed(request.Session, request.NewPassword);
            _userRepository.Update(user);
            await _userRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
