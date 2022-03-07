using System;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Domain.Core.AppContext
{
    public interface IAppContext
    {
        Task<CurrentUser> GetCurrentUserAsync();
        void SetCurrentUserId(Guid userId);
        string GetAccessToken();
        void SetAccessToken(string token);
        Guid GetCurrentUserId();
    }
}
