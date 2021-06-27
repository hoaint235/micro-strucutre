using MassTransit;
using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Commands.Handlers
{
    public class CreateHandler : IRequestHandler<Create, ApiResult<Unit>>
    {
        private readonly IUserRepository _userRepository;

        public CreateHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ApiResult<Unit>> Handle(Create request, CancellationToken cancellationToken)
        {
            var user = Domain.Users.User.Create(request.Email, request.PhoneNumber, request.Roles);
            _userRepository.Add(user);
            await _userRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
