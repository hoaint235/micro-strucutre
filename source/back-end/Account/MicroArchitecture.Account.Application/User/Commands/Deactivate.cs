using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Commands
{
    public class Deactivate: IRequest<ApiResult<Unit>>
    {
    }
}
