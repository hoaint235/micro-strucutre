using System.Threading.Tasks;
using MicroArchitecture.Account.Application.Account.Commands;
using Microsoft.AspNetCore.Mvc;

namespace MicroArchitecture.Account.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : ApiController
    {

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]Login request) => await SendAsync(request);

        [HttpPost("change-first-time")]
        public async Task<IActionResult> ChangeFirstTime([FromBody] ChangeFirstTime request) => await SendAsync(request);

    }
}
