using System.Threading;
using System.Threading.Tasks;
using MicroArchitecture.Account.API.Infrastructures.Attributes;
using MicroArchitecture.Account.Application.Role.Queries;
using MicroArchitecture.Account.Domain.Policies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MicroArchitecture.Account.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class RolesController : ApiController
    {
        [Role(typeof(Master))]
        [HttpGet]
        public async Task<IActionResult> ListRoleAsync([FromQuery] ListRole request,
            CancellationToken cancellationToken = default)
            => await SendAsync(request, cancellationToken);
    }
}
