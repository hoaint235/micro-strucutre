using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Accounts
{
    public class AccountRole: Entity, IAudit
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

        private AccountRole(Guid userId, Guid roleId)
        {
            UserId = userId;
            RoleId = roleId;
        }

        public static List<AccountRole> Create(Guid userId, List<Guid> roleIds)
        {
            var roles = new List<AccountRole>();
            roleIds.ForEach(id =>
            {
                roles.Add(new AccountRole(userId, id));
            });

            return roles;
        }
    }
}
