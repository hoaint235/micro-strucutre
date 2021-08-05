using AutoMapper;
using MediatR;
using MicroArchitecture.Account.Application.Accounts.Models;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Domain.Accounts.Specifications;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Accounts.Queries.Handlers
{
    public class GetByEmailHandler : IRequestHandler<GetByEmail, ApiResult<UserDto>>
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper _mapper;

        public GetByEmailHandler(IAccountRepository accountRepository
            , IMapper mapper)
        {
            _accountRepository = accountRepository;
            _mapper = mapper;
        }

        public async Task<ApiResult<UserDto>> Handle(GetByEmail request, CancellationToken cancellationToken)
        {
            var user = await _accountRepository.FindAsync(new EmailSpecification(request.Email));
            return ApiResult<UserDto>.Ok(_mapper.Map<UserDto>(user));
        }
    }
}
