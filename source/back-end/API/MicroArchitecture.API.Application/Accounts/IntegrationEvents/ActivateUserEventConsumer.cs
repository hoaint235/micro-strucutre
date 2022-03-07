using MassTransit;
using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Accounts.IntegrationEvents;
using MicroArchitecture.API.Domain.Services.UserManager;

namespace MicroArchitecture.API.Application.Accounts.IntegrationEvents
{
    public class ActivateUserEventConsumer : IConsumer<ActivateUserEvent>
    {
        private readonly IUserManager _userManager;

        public ActivateUserEventConsumer(IUserManager userManager)
        {
            _userManager = userManager;
        }

        public async Task Consume(ConsumeContext<ActivateUserEvent> context)
        {
            var message = context.Message;
            await _userManager.ActivateUserAsync(message.UserName);
        }
    }
}
