using System;
using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.RawQueries;

namespace MicroArchitecture.Account.API.Infrastructures
{
    public class AppContext : IAppContext
    {
        private string _accessToken = string.Empty;
        private Guid CurrentUserId { get; set; }
        private CurrentUser CurrentUser { get; set; }
        private readonly IDapperQuery _dapperQuery;

        public AppContext(IDapperQuery dapperQuery)
        {
            _dapperQuery = dapperQuery;
        }

        public async Task<CurrentUser> GetCurrentUserAsync()
        {
            if (CurrentUser != null)
            {
                return CurrentUser;
            }

            var query = UserQueries.GetCurrentUser(CurrentUserId);

            var currentUser = await _dapperQuery.QueryFirstOrDefaultAsync<CurrentUser>(query.Query, query.Parameters);
            return currentUser;
        }

        public void SetCurrentUserId(Guid userId)
        {
            CurrentUserId = userId;
        }

        public string GetAccessToken() => _accessToken;

        public void SetAccessToken(string token)
        {
            _accessToken = token;
        }
    }
}
