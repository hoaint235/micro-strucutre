using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Commands.Handlers
{
    public class DeactivateHandler : IRequestHandler<Deactivate, ApiResult<Unit>>
    {
        private readonly IUserManager _userManager;

        public DeactivateHandler(IUserManager userManager)
        {
            _userManager = userManager;
        }

        public async Task<ApiResult<Unit>> Handle(Deactivate request, CancellationToken cancellationToken)
        {
            return new ApiResult<Unit>();
        }
    }
}
