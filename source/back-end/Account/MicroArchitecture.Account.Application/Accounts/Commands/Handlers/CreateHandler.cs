using MediatR;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;
using Profile = MicroArchitecture.Account.Domain.Accounts.Profile;

namespace MicroArchitecture.Account.Application.Accounts.Commands.Handlers
{
    public class CreateHandler : IRequestHandler<Create, ApiResult<Unit>>
    {
        private readonly IAccountRepository _accountRepository;

        public CreateHandler(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public async Task<ApiResult<Unit>> Handle(Create request, CancellationToken cancellationToken)
        {
            var profile = Profile.Create(request.Profile.Email, request.Profile.PhoneNumber, request.Profile.FirstName, request.Profile.LastName, request.Profile.CountryCode);
            Domain.Accounts.Account user;
            if (request.IsEditAddress)
            {
                var address = Address.Create(request.Address.HouseNumber, request.Address.District, request.Address.City);
                user = Domain.Accounts.Account.Create(profile, address, request.Roles);
            }
            else
            {
                user = Domain.Accounts.Account.Create(profile, request.Roles);
            }
            _accountRepository.Add(user);
            await _accountRepository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
