using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Commands.Handlers
{
    public class DeleteHandler : IRequestHandler<Delete, ApiResult<Unit>>
    {
        private readonly IUserRepository _userRepository;

        public DeleteHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ApiResult<Unit>> Handle(Delete request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetAsync(request.UserId);
            user.Deleted();
            _userRepository.Delete(user);
            await _userRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
