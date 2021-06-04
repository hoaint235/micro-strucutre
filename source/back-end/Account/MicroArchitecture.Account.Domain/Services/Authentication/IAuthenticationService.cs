using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;

namespace MicroArchitecture.Account.Domain.Services.Authentication
{
    public interface IAuthenticationService
    {
        Task<UserAuthenticated> LoginAsync(UserCertificate user);
        Task ForgotPasswordAsync(string email);
        Task<AuthenResult> ChangePasswordFirstTimeAsync(UserCertificate user, string session);
        Task ConfirmationPasswordAsync(UserCertificate user, string code);
    }
}
