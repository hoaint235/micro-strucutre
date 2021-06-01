using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Services.Authentication.Models;

namespace MicroArchitecture.Account.Domain.Services.Authentication
{
    public interface IAuthenticationService
    {
        Task<UserSignIned> LoginAsync(UserCertificate user);
        Task ForgotPasswordAsync(string email);
        Task ChangePasswordFirstTimeAsync(UserCertificate user);
        Task ConfirmationPasswordAsync(UserCertificate user, string code);
    }
}
