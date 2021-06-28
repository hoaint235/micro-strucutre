using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Users.IntegrationEvents
{
    public class ActivateUserEvent : IntegrationEvent
    {
        public string UserName { get; set; }
    }
}