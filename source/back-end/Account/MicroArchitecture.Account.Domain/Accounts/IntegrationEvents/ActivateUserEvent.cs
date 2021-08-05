using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Accounts.IntegrationEvents
{
    public class ActivateUserEvent : IntegrationEvent
    {
        public string UserName { get; set; }
    }
}