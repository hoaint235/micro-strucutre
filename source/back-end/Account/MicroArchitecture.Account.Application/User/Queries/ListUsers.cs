using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Core.HttpClient;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Queries
{
    public class ListUsers: ListingRequest, IRequest<ApiResult<ListingResponse<UserDto>>>
    {
    }
}