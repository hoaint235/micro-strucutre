using MassTransit;
using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Accounts.IntegrationEvents;
using MicroArchitecture.API.Domain.Services.UserManager;

namespace MicroArchitecture.API.Application.Accounts.IntegrationEvents
{
    public class UserDeletedEventConsumer : IConsumer<UserDeletedEvent>
    {
        private readonly IUserManager _userManager;

        public UserDeletedEventConsumer(IUserManager userManager)
        {
            _userManager = userManager;
        }

        public async Task Consume(ConsumeContext<UserDeletedEvent> context)
        {
            var message = context.Message;
            await _userManager.DeleteUserAsync(message.UserName);
        }
    }
}
