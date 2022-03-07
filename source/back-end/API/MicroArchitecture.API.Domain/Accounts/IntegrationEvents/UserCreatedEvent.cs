using MicroArchitecture.API.Domain.Core.Events;

namespace MicroArchitecture.API.Domain.Accounts.IntegrationEvents
{
    public class UserCreatedEvent : IntegrationEvent
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}