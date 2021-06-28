using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User
{
    public class ChangePasswordFirstTime : IRequest<ApiResult<Unit>>
    {
        public string Session { get; set; }
        public string UserName { get; set; }
        public string NewPassword { get; set; }
    }
}
