using MediatR;
using MicroArchitecture.API.Application.Accounts.Models;
using MicroArchitecture.API.Domain.Commons;
using MicroArchitecture.API.Domain.Core.AppContext;
using MicroArchitecture.API.Domain.Core.HttpClient;
using MicroArchitecture.API.Domain.Roles;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using MicroArchitecture.API.Infrastructure.Database.Dapper;
using MicroArchitecture.API.Infrastructure.RawQueries;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Accounts.Queries
{
    public class ListUsers 
    {
        public class Request : ListingRequest, IRequest<ApiResult<ListingResponse<UserDto>>>
        {

        }

        public class Handler : IRequestHandler<Request, ApiResult<ListingResponse<UserDto>>>
        {
            private readonly IDapperQuery _dapperQuery;
            private readonly IAppContext _appContext;

            public Handler(IDapperQuery dapperQuery
                , IAppContext appContext)
            {
                _dapperQuery = dapperQuery;
                _appContext = appContext;
            }

            public async Task<ApiResult<ListingResponse<UserDto>>> Handle(Request request, CancellationToken cancellationToken)
            {
                var currentUser = await _appContext.GetCurrentUserAsync();
                var roles = Role.GetRole(currentUser.Roles.Select(x => x.Id));
                var roleMaster = roles.FirstOrDefault(x => x.Type == RoleType.Admin);

                var query = UserQueries.ListUser(request, currentUser.Id, roles.Select(x => x.Id).ToList());
                var users = await _dapperQuery.QueryAsync<UserDto>(query.Query, query.Parameters);

                if (!users.Any())
                {
                    return ApiResult<ListingResponse<UserDto>>.Ok(ListingResponse<UserDto>.Empty());
                }

                foreach (var data in users)
                {
                    data.HasPermission = !data.Roles.Contains(roleMaster.Id);
                }

                var result = new ListingResponse<UserDto>(users, users.First().TotalItems);
                return ApiResult<ListingResponse<UserDto>>.Ok(result);
            }
        }
    }
}