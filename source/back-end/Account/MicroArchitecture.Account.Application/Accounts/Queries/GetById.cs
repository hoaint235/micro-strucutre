using MediatR;
using MicroArchitecture.Account.Application.Accounts.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;

namespace MicroArchitecture.Account.Application.Accounts.Queries
{
    public class GetById : IRequest<ApiResult<UserDetailDto>>
    {
        public Guid UserId { get; set; }
    }
}
