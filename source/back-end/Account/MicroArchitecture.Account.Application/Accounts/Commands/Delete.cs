using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;

namespace MicroArchitecture.Account.Application.Accounts.Commands
{
    public class Delete : IRequest<ApiResult<Unit>>
    {
        public Guid UserId { get; set; }
    }
}
