using System;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Accounts.Models
{
    public class UserDetailDto
    {
        public string Id { get; set; }
        public IEnumerable<Guid> Roles { get; set; }
        public ProfileDto Profile { get; set; }
        public AddressDto Address { get; set; }
    }
}
