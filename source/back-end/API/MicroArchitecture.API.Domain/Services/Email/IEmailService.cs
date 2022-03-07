using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Services.Email.Models;

namespace MicroArchitecture.API.Domain.Services.Email
{
    public interface IEmailService
    {
        Task SendAsync<TEmail>(TEmail email) where TEmail : EmailMessage;
    }
}
