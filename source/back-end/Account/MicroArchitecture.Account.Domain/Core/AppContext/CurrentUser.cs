using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Accounts;

namespace MicroArchitecture.Account.Domain.Core.AppContext
{
    public class CurrentUser
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public AccountStatus Status { get; set; }
        public ICollection<Guid> Roles { get; set; } = new List<Guid>();
    }
}
