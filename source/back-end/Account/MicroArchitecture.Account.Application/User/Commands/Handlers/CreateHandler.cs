using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;
using Profile = MicroArchitecture.Account.Domain.Users.Profile;

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
            var profile = Profile.Create(request.Profile.Email, request.Profile.PhoneNumber, request.Profile.FirstName, request.Profile.LastName, request.Profile.CountryCode);
            Domain.Users.User user;
            if (request.IsEditAddress)
            {
                var address = Address.Create(request.Address.HouseNumber, request.Address.District, request.Address.City);
                user = Domain.Users.User.Create(profile, address, request.Roles);
            }
            else
            {
                user = Domain.Users.User.Create(profile, request.Roles);
            }
            _userRepository.Add(user);
            await _userRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
