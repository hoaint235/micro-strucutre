using MediatR;
using MicroArchitecture.Account.Application.Accounts.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Accounts.Queries
{
    public class GetByEmail : IRequest<ApiResult<UserDto>>
    {
        public string Email { get; set; }
    }
}
