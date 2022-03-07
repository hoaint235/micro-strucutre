using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Domain.Services.UserManager
{
    public interface IUserManager
    {
        Task ListUsersAsync(CancellationToken cancellationToken = default);
        Task ActivateUserAsync(string userName);
        Task DeactivateUserAsync(string userName);
        Task<string> CreateUserAsync(string userName);
        Task DisabledUserAsync(string userName);
        Task EnabledUserAsync(string userName);
        Task DeleteUserAsync(string userName);
    }
}