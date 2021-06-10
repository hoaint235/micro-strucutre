using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Domain.Services.UserManager
{
    public interface IUserManager
    {
        Task ListUsersAsync(CancellationToken cancellationToken = default);
        Task ActivateUserAsync(string userName);
        Task DeactivateUserAsync(string userName);
    }
}