using MicroArchitecture.Account.Domain.Core.Domain;
using System;

namespace MicroArchitecture.Account.Domain.Roles
{
    public class RolePermission : Entity
    {
        public Guid RoleId { get; set; }
        public Guid PermissionId { get; set; }
    }
}
