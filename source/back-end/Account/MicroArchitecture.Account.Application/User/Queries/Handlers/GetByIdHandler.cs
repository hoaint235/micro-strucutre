using AutoMapper;
using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Queries.Handlers
{
    public class GetByIdHandler : IRequestHandler<GetById, ApiResult<UserDetailDto>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public GetByIdHandler(IUserRepository userRepository
            , IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<ApiResult<UserDetailDto>> Handle(GetById request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetAsync(request.UserId);
            var result = _mapper.Map<UserDetailDto>(user);
            return ApiResult<UserDetailDto>.Ok(result);
        }
    }
}
