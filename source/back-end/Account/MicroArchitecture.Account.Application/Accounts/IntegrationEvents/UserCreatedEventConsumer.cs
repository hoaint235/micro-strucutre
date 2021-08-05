using MassTransit;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Domain.Accounts.IntegrationEvents;
using MicroArchitecture.Account.Domain.Accounts.Specifications;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Accounts.IntegrationEvents
{
    public class UserCreatedEventConsumer : IConsumer<UserCreatedEvent>
    {
        private readonly IUserManager _userManger;
        private readonly IAccountRepository _accountRepository;

        public UserCreatedEventConsumer(IUserManager userManger
            , IAccountRepository accountRepository)
        {
            _userManger = userManger;
            _accountRepository = accountRepository;
        }

        public async Task Consume(ConsumeContext<UserCreatedEvent> context)
        {
            var response = context.Message;
            var awsUserId = await _userManger.CreateUserAsync(response.Email);

            var user = await _accountRepository.FindAsync(new EmailSpecification(response.Email));
            user.UpdateExternalId(awsUserId);
            _accountRepository.Update(user);
            await _accountRepository.UnitOfWork.CommitAsync();
        }
    }
}
