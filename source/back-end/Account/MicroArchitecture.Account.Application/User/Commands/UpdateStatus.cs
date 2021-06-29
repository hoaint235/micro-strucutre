using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Commands
{
    public class UpdateStatus : IRequest<ApiResult<Unit>>
    {
        public string Email { get; set; }
        public UserStatus Status { get; set; }
    }
}
