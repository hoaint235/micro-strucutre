using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Users;

namespace MicroArchitecture.Account.Domain.Core.AppContext
{
    public class CurrentUser
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public UseStatus Status { get; set; }
        public ICollection<Guid> Roles { get; set; } = new List<Guid>();
    }
}
