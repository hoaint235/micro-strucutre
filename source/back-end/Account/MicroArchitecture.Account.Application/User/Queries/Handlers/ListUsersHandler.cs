using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Queries.Handlers
{
    public class ListUsersHandler : IRequestHandler<ListUsers, ApiResult<Unit>>
    {
        private readonly IUserManager _userManager; 

        public ListUsersHandler(IUserManager userManager)
        {
            _userManager = userManager;
        }

        public async Task<ApiResult<Unit>> Handle(ListUsers request, CancellationToken cancellationToken)
        {
            await _userManager.ListUsersAsync(cancellationToken);

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}