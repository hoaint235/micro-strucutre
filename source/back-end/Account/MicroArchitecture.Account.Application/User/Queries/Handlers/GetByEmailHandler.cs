using AutoMapper;
using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Domain.Users.Specifications;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Queries.Handlers
{
    public class GetByEmailHandler : IRequestHandler<GetByEmail, ApiResult<UserDto>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public GetByEmailHandler(IUserRepository userRepository
            , IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<ApiResult<UserDto>> Handle(GetByEmail request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.FindAsync(new EmailSpecification(request.Email));
            return ApiResult<UserDto>.Ok(_mapper.Map<UserDto>(user));
        }
    }
}
