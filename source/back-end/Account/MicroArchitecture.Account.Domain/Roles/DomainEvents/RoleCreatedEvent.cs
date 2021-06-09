using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Roles.DomainEvents
{
    public class RoleCreatedEvent : DomainEvent
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
