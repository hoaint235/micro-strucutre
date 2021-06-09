using System.Threading;
using System.Threading.Tasks;
using MicroArchitecture.Account.Application.Role.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MicroArchitecture.Account.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class RolesController : ApiController
    {
        [Authorize(Policy = "Admin")]
        [HttpGet]
        public async Task<IActionResult> ListRoleAsync([FromQuery] ListRole request,
            CancellationToken cancellationToken = default)
            => await SendAsync(request, cancellationToken);
    }
}
