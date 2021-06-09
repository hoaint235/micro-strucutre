using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Commands
{
    public class Deactivate: IRequest<ApiResult<Unit>>

    {
    }
}
