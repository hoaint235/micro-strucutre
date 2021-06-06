using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace MicroArchitecture.Account.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : ApiController
    {
        [Authorize(Policy = "Admin")]
        [HttpGet]
        public Task<string> ListUser([FromQuery] string query)
        {
            return Task.FromResult(query);
        }
    }
}
