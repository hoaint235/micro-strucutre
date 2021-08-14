using System;
using System.Collections.Generic;
using System.Linq;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Roles
{
    public class Role : Entity, IAggregateRoot, IAudit
    {
        public string Name { get; private set; }
        public RoleType Type { get; private set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<RolePermission> RolePermissions { get; set; }

        private Role(Guid id, string name, RoleType type)
        {
            Id = id;
            Name = name;
            Type = type;
        }

        private static Role Create(string id, string name, RoleType type)
        {
            return new Role(Guid.Parse(id), name, type);
        }

        public static Role Create(RoleType type)
        {
            return GetDefaultData().FirstOrDefault(x => x.Type == type);
        }

        public static IEnumerable<Role> GetDefaultData()
        {
            yield return Create("b20dae0f-c71d-45e3-bb1d-d8a681125694", "Admin", RoleType.Admin);
            yield return Create("87927bd4-9167-4b35-8745-0ebf2cbf4f30", "MasterData", RoleType.MasterData);
            yield return Create("892d4bb3-034d-4169-b2ad-77f8ef1426b3", "Manager", RoleType.Manager);
            yield return Create("197e3aee-cd99-4d93-9627-80ea1d0a7a22", "User", RoleType.User);
         }
        public static IEnumerable<Role> GetRole(IEnumerable<Guid> roleIds)
        {
            var defaultRoles = GetDefaultData();
            return defaultRoles.Where(x => roleIds.Contains(x.Id));
        }
    }
}
