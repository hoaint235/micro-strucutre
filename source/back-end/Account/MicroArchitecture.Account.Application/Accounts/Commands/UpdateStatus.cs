using MediatR;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Accounts.Commands
{
    public class UpdateStatus : IRequest<ApiResult<Unit>>
    {
        public string Email { get; set; }
        public AccountStatus Status { get; set; }
    }
}
