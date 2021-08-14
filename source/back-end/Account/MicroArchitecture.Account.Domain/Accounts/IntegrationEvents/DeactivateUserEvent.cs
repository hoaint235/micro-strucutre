using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Accounts.IntegrationEvents
{
    public class DeactivateUserEvent : IntegrationEvent
    {
        public string UserName { get; set; }
    }
}
