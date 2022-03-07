using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Services.Email.Models;

namespace MicroArchitecture.API.Domain.Services.Email
{
    public interface IEmailBodyRender
    {
        Task<string> RenderAsync<TModel>(string template, TModel model) where TModel : EmailMessage;
    }
}
