using System;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Domain.Core.AppContext
{
    public class CurrentUserRole
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<string> Permissions { get; set; }
    }
}
