using MediatR;
using MicroArchitecture.Account.Application.Accounts.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Accounts.Commands
{
    public class Create : IRequest<ApiResult<Unit>>
    {
        public ProfileDto Profile { get; set; }
        public List<Guid> Roles { get; set; }
        public bool IsEditAddress { get; set; }
        public AddressDto Address { get; set; }
    }
}
