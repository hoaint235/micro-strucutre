using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Commands.Handlers
{
    public class UpdateStatusHandler : IRequestHandler<UpdateStatus, ApiResult<Unit>>
    {
        private readonly IUserRepository _userRepository;

        public UpdateStatusHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ApiResult<Unit>> Handle(UpdateStatus request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetAsync(request.UserId);
            user.UpdateStatus(request.Status);
            _userRepository.Update(user);
            await _userRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
