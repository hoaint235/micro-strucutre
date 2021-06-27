using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Application.User.Commands
{
    public class Create : IRequest<ApiResult<Unit>>
    {
        public string Email { get; set; }
        public List<Guid> Roles { get; set; }
        public string PhoneNumber {get;set;}
    }
}
