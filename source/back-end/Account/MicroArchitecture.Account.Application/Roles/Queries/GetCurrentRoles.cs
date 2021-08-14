using MediatR;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Roles.Queries
{
    public class GetCurrentRoles : IRequest<ApiResult<IEnumerable<RoleType>>>
    {
    }
}
