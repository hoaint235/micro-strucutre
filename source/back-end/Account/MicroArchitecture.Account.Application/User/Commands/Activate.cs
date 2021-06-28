using System;
using MediatR;
using MicroArchitecture.Account.Infrastructure.Commons.Models;

namespace MicroArchitecture.Account.Application.User.Commands
{
  public class Activate : IRequest<ApiResult<Unit>>
  {
    public Guid UserId { get; set; }
  }
}