using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Users;

namespace MicroArchitecture.Account.Application.User.Models
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsActivate { get; set; }
        public UseStatus Status { get; set; }
        public ICollection<Guid> Roles { get; set; }
        public bool HasPermission { get; set; }
    }
}
