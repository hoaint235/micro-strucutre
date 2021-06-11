using System.Collections.Generic;
using MediatR;
using MicroArchitecture.Account.Application.Role.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Role.Queries
{
    public class ListRole  : IRequest<ApiResult<IEnumerable<RoleDto>>>
    {
    }
}
