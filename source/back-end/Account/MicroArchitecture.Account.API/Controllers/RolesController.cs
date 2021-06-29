using MicroArchitecture.Account.API.Infrastructures.Attributes;
using MicroArchitecture.Account.Application.Roles.Queries;
using MicroArchitecture.Account.Application.User.Commands;
using MicroArchitecture.Account.Domain.Commons;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.API.Controllers
{
    [Authorize]
    [Route("/api/[controller]")]
    public class RolesController : ApiController
    {
        [Role(RoleType.Master, RoleType.Admin, RoleType.User)]
        [HttpGet]
        public async Task<IActionResult> GetRoles([FromQuery] GetRoles request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Role(RoleType.Master, RoleType.Admin)]
        [HttpPut("{userId}")]
        public async Task<IActionResult> UpdateRole([FromRoute] Guid userId, [FromBody] UpdateRole request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }
    }
}
