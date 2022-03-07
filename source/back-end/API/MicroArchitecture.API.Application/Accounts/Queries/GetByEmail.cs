using AutoMapper;
using MediatR;
using MicroArchitecture.API.Application.Accounts.Models;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Domain.Accounts.Specifications;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Accounts.Queries
{
    public class GetByEmail
    {
        public class Request : IRequest<ApiResult<UserDto>>
        {
            public string Email { get; set; }
        }

        public class Handler : IRequestHandler<Request, ApiResult<UserDto>>
        {
            private readonly IAccountRepository _accountRepository;
            private readonly IMapper _mapper;

            public Handler(IAccountRepository accountRepository
                , IMapper mapper)
            {
                _accountRepository = accountRepository;
                _mapper = mapper;
            }

            public async Task<ApiResult<UserDto>> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = await _accountRepository.FindAsync(new EmailSpecification(request.Email));
                return ApiResult<UserDto>.Ok(_mapper.Map<UserDto>(user));
            }
        }
    }
}
