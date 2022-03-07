using MassTransit;
using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Accounts.IntegrationEvents;
using MicroArchitecture.API.Domain.Services.UserManager;

namespace MicroArchitecture.API.Application.Accounts.IntegrationEvents
{
    public class DeactivateUserEventConsumer : IConsumer<DeactivateUserEvent>
    {
        private readonly IUserManager _userManager;

        public DeactivateUserEventConsumer(IUserManager userManager)
        {
            _userManager = userManager;
        }

        public async Task Consume(ConsumeContext<DeactivateUserEvent> context)
        {
            var message = context.Message;
            await _userManager.DisabledUserAsync(message.UserName);
        }
    }
}
