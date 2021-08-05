using MediatR;
using MicroArchitecture.Account.Application.Accounts.Models;
using MicroArchitecture.Account.Domain.Core.HttpClient;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.Accounts.Queries
{
    public class ListUsers: ListingRequest, IRequest<ApiResult<ListingResponse<UserDto>>>
    {
    }
}