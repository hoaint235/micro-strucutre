using MicroArchitecture.API.Domain.Core.Events;

namespace MicroArchitecture.API.Domain.Accounts.IntegrationEvents
{
    public class DeactivateUserEvent : IntegrationEvent
    {
        public string UserName { get; set; }
    }
}
