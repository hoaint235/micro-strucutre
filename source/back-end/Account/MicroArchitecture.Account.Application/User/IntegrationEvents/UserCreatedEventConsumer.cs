using MassTransit;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Domain.Users.IntegrationEvents;
using MicroArchitecture.Account.Domain.Users.Specifications;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.IntegrationEvents
{
    public class UserCreatedEventConsumer : IConsumer<UserCreatedEvent>
    {
        private readonly IUserManager _userManger;
        private readonly IUserRepository _userRepository;

        public UserCreatedEventConsumer(IUserManager userManger
            , IUserRepository userRepository)
        {
            _userManger = userManger;
            _userRepository = userRepository;
        }

        public async Task Consume(ConsumeContext<UserCreatedEvent> context)
        {
            var response = context.Message;
            var awsUserId = await _userManger.CreateUserAsync(response.Email);

            var user = await _userRepository.FindAsync(new EmailSpecification(response.Email));
            user.UpdateExternalId(awsUserId);
            _userRepository.Update(user);
            await _userRepository.UnitOfWork.CommitAsync();
        }
    }
}
