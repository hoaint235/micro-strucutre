using System.Collections.Generic;
using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Queries
{
    public class ListUsers: IRequest<ApiResult<IEnumerable<UserDto>>>
    {
    }
}