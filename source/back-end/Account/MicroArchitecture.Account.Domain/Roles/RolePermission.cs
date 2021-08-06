using MicroArchitecture.Account.Domain.Core.Domain;
using System;

namespace MicroArchitecture.Account.Domain.Roles
{
    public class RolePermission : Entity, IAudit
    {
        public Guid RoleId { get; set; }
        public Guid PermissionId { get; set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
