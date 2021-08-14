using MicroArchitecture.Account.API.Infrastructures.Attributes;
using MicroArchitecture.Account.Application.Roles.Queries;
using MicroArchitecture.Account.Application.Accounts.Commands;
using MicroArchitecture.Account.Domain.Commons;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;
using System.Threading.Tasks;
using MicroArchitecture.Account.Application.Permissions.Queries;
using MicroArchitecture.Account.Application.Permissions.Commands;

namespace MicroArchitecture.Account.API.Controllers
{
    [Authorize]
    [Route("/api/[controller]")]
    public class RolesController : ApiController
    {
        [Permission(PermissionType.Account, ActionType.View, RoleType.Admin)]
        [HttpGet]
        public async Task<IActionResult> GetRoles([FromQuery] GetRoles request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Permission, ActionType.View, RoleType.Admin, RoleType.Manager)]
        [HttpGet("permissions")]
        public async Task<IActionResult> GetPermissions([FromQuery] GetPermissions request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Permission, ActionType.Edit, RoleType.Admin)]
        [HttpPut("permissions")]
        public async Task<IActionResult> UpdatePermissions([FromBody] Update request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Account, ActionType.Edit, RoleType.Admin)]
        [HttpPut("{userId}")]
        public async Task<IActionResult> UpdateRole([FromRoute] Guid userId, [FromBody] UpdateRole request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [HttpGet("current-role")]
        public async Task<IActionResult> GetCurrentRoles([FromQuery] GetCurrentRoles request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [HttpGet("current-permission")]
        public async Task<IActionResult> GetCurrentPermissions([FromQuery] GetCurrentPermissions request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [HttpGet("current-action")]
        public async Task<IActionResult> GetCurrentActions([FromQuery] GetCurrentActions request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);
    }
}
