using MassTransit;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Domain.Users.IntegrationEvents;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.IntegrationEvents
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
