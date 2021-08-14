using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Accounts.IntegrationEvents
{
    public class UserDeletedEvent : IntegrationEvent
    {
        public string UserName { get; set; }
    }
}
