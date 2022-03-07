using MicroArchitecture.API.Application.Accounts.Commands;
using MicroArchitecture.API.Application.Permissions.Commands;
using MicroArchitecture.API.Application.Permissions.Queries;
using MicroArchitecture.API.Application.Roles.Queries;
using MicroArchitecture.API.Domain.Commons;
using MicroArchitecture.API.Infrastructures.Attributes;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Controllers
{
    public class RolesController : ApiController
    {
        [Permission(PermissionType.Account, ActionType.View, RoleType.Admin, RoleType.MasterData)]
        [HttpGet]
        public async Task<IActionResult> GetRoles([FromQuery] GetRoles.Request request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Permission, ActionType.View, RoleType.Admin, RoleType.Manager)]
        [HttpGet("permissions")]
        public async Task<IActionResult> GetPermissions([FromQuery] GetPermissions.Request request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Permission, ActionType.Edit, RoleType.Admin)]
        [HttpPut("permissions")]
        public async Task<IActionResult> UpdatePermissions([FromBody] Update.Command request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Account, ActionType.Edit, RoleType.Admin)]
        [HttpPut("{userId}")]
        public async Task<IActionResult> UpdateRole([FromRoute] Guid userId, [FromBody] UpdateRole.Command request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [HttpGet("current-role")]
        public async Task<IActionResult> GetCurrentRoles([FromQuery] GetCurrentRoles.Request request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [HttpGet("current-permission")]
        public async Task<IActionResult> GetCurrentPermissions([FromQuery] GetCurrentPermissions.Request request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [HttpGet("current-action")]
        public async Task<IActionResult> GetCurrentActions([FromQuery] GetCurrentActions.Request request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);
    }
}
