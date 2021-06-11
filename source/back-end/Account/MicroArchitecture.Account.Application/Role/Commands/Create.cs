using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Role.Commands
{
    public class Create : IRequest<ApiResult<Unit>>
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}