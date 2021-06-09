using System;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Domain.Roles.DomainEvents;

namespace MicroArchitecture.Account.Domain.Roles
{
    public class Role : Entity, IAudit, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

        private Role(string name, string description)
        {
            Name = name;
            Description = description;
        }

        public static Role Create(string name, string description = "")
        {
            return new Role(name, description);
        }

        public void AddGroupIdentity()
        {
            AddDomainEvent(new RoleCreatedEvent
            {
                Description = Description,
                Name = Name
            });
        }
    }
}
