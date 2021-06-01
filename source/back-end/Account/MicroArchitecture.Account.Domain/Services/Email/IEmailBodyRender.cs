using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Services.Email.Models;

namespace MicroArchitecture.Account.Domain.Services.Email
{
    public interface IEmailBodyRender
    {
        Task<string> RenderAsync<TModel>(string template, TModel model) where TModel : EmailMessage;
    }
}
