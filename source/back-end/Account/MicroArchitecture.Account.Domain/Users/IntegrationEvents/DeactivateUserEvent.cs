using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Users.IntegrationEvents
{
    public class DeactivateUserEvent : IntegrationEvent
    {
        public string UserName { get; set; }
    }
}
