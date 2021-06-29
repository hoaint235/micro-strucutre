using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Commands.Handlers
{
    public class UpdateRoleHandler : IRequestHandler<UpdateRole, ApiResult<Unit>>
    {
        private readonly IUserRepository _userRespository;

        public UpdateRoleHandler(IUserRepository userRespository)
        {
            _userRespository = userRespository;
        }

        public async Task<ApiResult<Unit>> Handle(UpdateRole request, CancellationToken cancellationToken)
        {
            var user = await _userRespository.GetAsync(request.UserId);
            user.UpdateRoles(request.RoleIds);
            _userRespository.Update(user);
            await _userRespository.UnitOfWork.CommitAsync();

            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
