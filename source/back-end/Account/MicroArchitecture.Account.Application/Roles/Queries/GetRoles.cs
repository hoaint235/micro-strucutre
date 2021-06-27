using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Roles.Queries
{
    public class GetRoles : IRequest<ApiResult<IEnumerable<Guid>>>
    {
    }
}
