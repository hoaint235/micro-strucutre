using MediatR;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Roles.Queries
{
    public class GetRoles : IRequest<ApiResult<IEnumerable<CurrentUserRole>>>
    {
    }
}
