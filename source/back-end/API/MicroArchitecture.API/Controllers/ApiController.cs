using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.API.Controllers
{
    [Authorize]
    [ApiController]
    [Produces("application/json")]
    [Route("/api/[controller]")]
    public class ApiController : ControllerBase
    {
        private IMediator Mediator => HttpContext.RequestServices.GetService<IMediator>();

        protected async Task<IActionResult> SendAsync<TResponse>(IRequest<ApiResult<TResponse>> request, CancellationToken cancellationToken = default)
        {
            var result = await Mediator.Send(request, cancellationToken);
            if (result.IsSuccess)
            {
                return Ok(result.Result);
            }

            var error = result.ErrorCodes.FirstOrDefault();
            return BadRequest(error?.Code);
        }
    }
}
