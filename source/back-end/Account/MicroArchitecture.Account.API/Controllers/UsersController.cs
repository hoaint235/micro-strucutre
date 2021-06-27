using System.Threading;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Attributes;
using MicroArchitecture.Account.Application.User.Queries;
using MicroArchitecture.Account.Domain.Commons;
using Microsoft.AspNetCore.Authorization;
using MicroArchitecture.Account.Application.User.Commands;

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
        [HttpGet("get-by-email")]
        public async Task<IActionResult> GetUserByEmail([FromQuery] Create request, CancellationToken cancellationToken) =>
            await SendAsync(request, cancellationToken);
    }
}
