using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;

namespace MicroArchitecture.Account.Application.User.Queries
{
    public class GetById : IRequest<ApiResult<UserDetailDto>>
    {
        public Guid UserId { get; set; }
    }
}
