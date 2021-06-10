using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Roles;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Role.Commands.Handlers
{
    public class CreateHandler : IRequestHandler<Create, ApiResult<Unit>>
    {
        private readonly IRoleRepository _roleRepository;

        public CreateHandler(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public async Task<ApiResult<Unit>> Handle(Create request, CancellationToken cancellationToken)
        {
            var role = Domain.Roles.Role.Create(request.Name, request.Description);
            role.AddGroupIdentity();

            _roleRepository.Add(role);
            await _roleRepository.UnitOfWork.CommitAsync(cancellationToken);
            return ApiResult<Unit>.Ok(Unit.Value);
        }
    }
}
