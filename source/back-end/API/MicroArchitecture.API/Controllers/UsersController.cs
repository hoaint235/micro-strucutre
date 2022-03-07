using System.Threading;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using MicroArchitecture.API.Domain.Commons;
using MicroArchitecture.API.Application.Accounts.Queries;
using MicroArchitecture.API.Infrastructures.Attributes;
using MicroArchitecture.API.Application.Accounts.Commands;

namespace MicroArchitecture.API.Controllers
{
    public class UsersController : ApiController
    {
        [Permission(PermissionType.Account, ActionType.View, RoleType.Admin, RoleType.MasterData, RoleType.Manager)]
        [HttpPost("query")]
        public async Task<IActionResult> ListUser([FromBody] ListUsers.Request request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Account, ActionType.Add, RoleType.Admin, RoleType.MasterData)]
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] Create.Command request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Account, ActionType.Edit, RoleType.Admin, RoleType.MasterData)]
        [HttpDelete("{userId}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid userId, CancellationToken cancellationToken) =>
            await SendAsync(new Delete.Command { UserId = userId }, cancellationToken);

        [Permission(PermissionType.Account, ActionType.View, RoleType.Admin, RoleType.MasterData)]
        [HttpGet("email")]
        public async Task<IActionResult> GetUserByEmail([FromQuery] GetByEmail.Request request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Permission(PermissionType.Account, ActionType.Edit, RoleType.Admin, RoleType.MasterData)]
        [HttpPut("{userId}:deactivate")]
        public async Task<IActionResult> DeactivateUser([FromRoute] Guid userId, [FromBody] Deactivate.Command request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [Permission(PermissionType.Account, ActionType.Edit, RoleType.Admin, RoleType.MasterData)]
        [HttpPut("{userId}:activate")]
        public async Task<IActionResult> ActivateUser([FromRoute] Guid userId, [FromBody] Activate.Command request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [Permission(PermissionType.Account, ActionType.View, RoleType.Admin, RoleType.MasterData)]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserById([FromRoute] Guid userId, [FromQuery] GetById.Request request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [Permission(PermissionType.Account, ActionType.Edit, RoleType.Admin, RoleType.MasterData)]
        [HttpPut("status")]
        public async Task<IActionResult> UpdateUserStatus([FromBody] UpdateStatus.Command request, CancellationToken cancellationToken)
            => await SendAsync(request, cancellationToken);
    }
}
