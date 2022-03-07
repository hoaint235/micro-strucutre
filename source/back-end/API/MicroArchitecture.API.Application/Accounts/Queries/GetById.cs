using AutoMapper;
using MediatR;
using MicroArchitecture.API.Application.Accounts.Models;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Accounts.Queries
{
    public class GetById
    {
        public class Request : IRequest<ApiResult<UserDetailDto>>
        {
            public Guid UserId { get; set; }
        }

        public class Handler : IRequestHandler<Request, ApiResult<UserDetailDto>>
        {
            private readonly IAccountRepository _accountRepository;
            private readonly IMapper _mapper;

            public Handler(IAccountRepository accountRepository
                , IMapper mapper)
            {
                _accountRepository = accountRepository;
                _mapper = mapper;
            }

            public async Task<ApiResult<UserDetailDto>> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = await _accountRepository.GetAsync(request.UserId);
                var result = _mapper.Map<UserDetailDto>(user);
                return ApiResult<UserDetailDto>.Ok(result);
            }
        }
    }
}
