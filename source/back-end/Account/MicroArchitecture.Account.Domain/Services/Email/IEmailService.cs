using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Services.Email.Models;

namespace MicroArchitecture.Account.Domain.Services.Email
{
    public interface IEmailService
    {
        Task SendAsync<TEmail>(TEmail email) where TEmail : EmailMessage;
    }
}
