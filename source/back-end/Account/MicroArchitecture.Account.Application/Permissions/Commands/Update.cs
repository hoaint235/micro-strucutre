using MediatR;
using MicroArchitecture.Account.Domain.Commons.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.Permissions.Commands
{
    public class Update : IRequest<ApiResult<Unit>>
    {
        public ICollection<PermissionStatus> Permissions { get; set; }
    }
}
