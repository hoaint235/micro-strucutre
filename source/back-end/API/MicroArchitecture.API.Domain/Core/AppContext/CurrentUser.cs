using System;
using System.Collections.Generic;
using MicroArchitecture.API.Domain.Accounts;

namespace MicroArchitecture.API.Domain.Core.AppContext
{
    public class CurrentUser
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public AccountStatus Status { get; set; }
        public ICollection<CurrentUserRole> Roles { get; set; } = new List<CurrentUserRole>();
    }
}
