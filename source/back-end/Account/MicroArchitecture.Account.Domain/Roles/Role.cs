using System;
using System.Collections.Generic;
using System.Linq;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Roles
{
    public class Role : ValueObject
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public RoleType Type { get; private set; }

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

        public static IEnumerable<Role> GetDefaultData()
        {
            yield return Create("3382AD33-A03E-4126-8648-367C7E75BC0B", "master", RoleType.Master);
            yield return Create("F125EFB3-CA2C-4589-A46D-7201DA35C0D6", "admin", RoleType.Admin);
            yield return Create("E95439AD-54DF-4407-92DF-E0135D925400", "user", RoleType.User);
        }

        public static IEnumerable<Role> GetRole(IEnumerable<Guid> roleIds)
        {
            var defaultRoles = GetDefaultData();
            return defaultRoles.Where(x => roleIds.Contains(x.Id));
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Id;
            yield return Name;
        }
    }
}
