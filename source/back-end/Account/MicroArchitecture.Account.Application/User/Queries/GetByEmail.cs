using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Queries
{
    public class GetByEmail : IRequest<ApiResult<UserDto>>
    {
        public string Email { get; set; }
    }
}
