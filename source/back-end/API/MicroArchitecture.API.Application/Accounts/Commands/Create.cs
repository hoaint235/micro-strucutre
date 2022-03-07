using MediatR;
using MicroArchitecture.API.Application.Accounts.Models;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Accounts.Commands
{
    public class Create
    {
        public class Command : IRequest<ApiResult<Unit>>
        {
            public ProfileDto Profile { get; set; }
            public List<Guid> Roles { get; set; }
            public bool IsEditAddress { get; set; }
            public AddressDto Address { get; set; }
        }

        public class Handler : IRequestHandler<Command, ApiResult<Unit>>
        {
            private readonly IAccountRepository _accountRepository;

            public Handler(IAccountRepository accountRepository)
            {
                _accountRepository = accountRepository;
            }

            public async Task<ApiResult<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var profile = Profile.Create(
                    request.Profile.Email, 
                    request.Profile.PhoneNumber, 
                    request.Profile.FirstName, 
                    request.Profile.LastName, 
                    request.Profile.CountryCode);

                Account user;
                if (request.IsEditAddress)
                {
                    var address = Address.Create(request.Address.HouseNumber, request.Address.District, request.Address.City);
                    user = Account.Create(profile, address, request.Roles);
                }
                else
                {
                    user = Account.Create(profile, request.Roles);
                }
                _accountRepository.Add(user);
                await _accountRepository.UnitOfWork.CommitAsync();

                return ApiResult<Unit>.Ok(Unit.Value);
            }
        }
    }
}
