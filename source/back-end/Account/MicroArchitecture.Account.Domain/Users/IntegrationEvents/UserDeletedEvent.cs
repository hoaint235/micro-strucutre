using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Users.IntegrationEvents
{
    public class UserDeletedEvent : IntegrationEvent
    {
        public string UserName { get; set; }
    }
}
