using System;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Users
{
    public class UserRole: Entity, IAudit
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

        private UserRole(Guid userId, Guid roleId)
        {
            UserId = userId;
            RoleId = roleId;
        }

        public static UserRole Create(Guid userId, Guid roleId)
        {
            return new UserRole(userId, roleId);
        }
    }
}
