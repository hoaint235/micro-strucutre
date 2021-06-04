using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Controllers
{
    [ApiController]
    [Produces("application/json")]
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
