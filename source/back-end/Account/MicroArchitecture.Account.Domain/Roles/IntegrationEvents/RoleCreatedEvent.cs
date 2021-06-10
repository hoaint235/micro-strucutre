using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Roles.IntegrationEvents
{
    public class RoleCreatedEvent : IntegrationEvent
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
