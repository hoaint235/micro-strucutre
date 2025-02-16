﻿using System;
using System.Collections.Generic;
using MicroArchitecture.API.Domain.Accounts;

namespace MicroArchitecture.API.Application.Accounts.Models
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsActive { get; set; }
        public AccountStatus Status { get; set; }
        public ICollection<Guid> Roles { get; set; }
        public bool HasPermission { get; set; }
        public int TotalItems { get; set; }
    }
}
