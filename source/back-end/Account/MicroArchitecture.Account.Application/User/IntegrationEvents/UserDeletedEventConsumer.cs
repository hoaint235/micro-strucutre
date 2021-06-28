﻿using MassTransit;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Domain.Users.IntegrationEvents;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.IntegrationEvents
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
