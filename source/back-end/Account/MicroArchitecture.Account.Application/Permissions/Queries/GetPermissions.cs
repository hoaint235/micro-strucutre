using MediatR;
using MicroArchitecture.Account.Domain.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Permissions.Queries
{
    public class GetPermissions : IRequest<ApiResult<IEnumerable<PermissionStatus>>>
    {
    }
}
