using MediatR;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;

namespace MicroArchitecture.Account.Application.User.Commands
{
    public class UpdateStatus : IRequest<ApiResult<Unit>>
    {
        public Guid UserId { get; set; }
        public UserStatus Status { get; set; }
    }
}
