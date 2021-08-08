using MediatR;
using MicroArchitecture.Account.Domain.Commons;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Roles.Queries
{
    public class GetCurrentActions : IRequest<ApiResult<IEnumerable<ActionType>>>
    {
        public RoleType Role { get; set; }
        public PermissionType Permission { get; set; }
    }
}
