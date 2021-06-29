using System.Threading;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Attributes;
using MicroArchitecture.Account.Application.User.Queries;
using MicroArchitecture.Account.Domain.Commons;
using Microsoft.AspNetCore.Authorization;
using MicroArchitecture.Account.Application.User.Commands;
using System;

namespace MicroArchitecture.Account.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : ApiController
    {
        [Role(RoleType.Master)]
        [HttpGet]
        public async Task<IActionResult> ListUser([FromQuery] ListUsers request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Role(RoleType.Master)]
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] Create request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Role(RoleType.Master)]
        [HttpDelete("{userId}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid userId, CancellationToken cancellationToken) =>
            await SendAsync(new Delete { UserId = userId }, cancellationToken);

        [Role(RoleType.Master)]
        [HttpGet("email")]
        public async Task<IActionResult> GetUserByEmail([FromQuery] GetByEmail request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);

        [Role(RoleType.Master, RoleType.Admin)]
        [HttpPut("{userId}:deactivate")]
        public async Task<IActionResult> DeactivateUser([FromRoute] Guid userId, [FromBody] Deactivate request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [Role(RoleType.Master, RoleType.Admin)]
        [HttpPut("{userId}:activate")]
        public async Task<IActionResult> ActivateUser([FromRoute] Guid userId, [FromBody] Activate request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [Role(RoleType.Master, RoleType.Admin)]
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserById([FromRoute] Guid userId, [FromQuery] GetById request, CancellationToken cancellationToken)
        {
            request.UserId = userId;
            return await SendAsync(request, cancellationToken);
        }

        [Role(RoleType.Master, RoleType.Admin)]
        [HttpPut("status")]
        public async Task<IActionResult> UpdateUserStatus([FromBody] UpdateStatus request, CancellationToken cancellationToken) 
            => await SendAsync(request, cancellationToken);
    }
}
