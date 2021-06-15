using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Users;

namespace MicroArchitecture.Account.Application.User.Models
{
    public class UserDto
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsActive { get; set; }
        public UseStatus Status { get; set; }
        public ICollection<Guid> Roles { get; set; }
    }
}
