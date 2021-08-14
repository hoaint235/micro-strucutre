using AutoMapper;
using MediatR;
using MicroArchitecture.Account.Application.Accounts.Models;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Accounts.Queries.Handlers
{
    public class GetByIdHandler : IRequestHandler<GetById, ApiResult<UserDetailDto>>
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper _mapper;

        public GetByIdHandler(IAccountRepository accountRepository
            , IMapper mapper)
        {
            _accountRepository = accountRepository;
            _mapper = mapper;
        }

        public async Task<ApiResult<UserDetailDto>> Handle(GetById request, CancellationToken cancellationToken)
        {
            var user = await _accountRepository.GetAsync(request.UserId);
            var result = _mapper.Map<UserDetailDto>(user);
            return ApiResult<UserDetailDto>.Ok(result);
        }
    }
}
