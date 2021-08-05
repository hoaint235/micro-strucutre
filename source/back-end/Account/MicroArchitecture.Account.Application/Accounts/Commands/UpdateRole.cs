using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Accounts.Commands
{
    public class UpdateRole : IRequest<ApiResult<Unit>>
    {
        public Guid UserId { get; set; }
        public List<Guid> RoleIds { get; set; }
    }
}
