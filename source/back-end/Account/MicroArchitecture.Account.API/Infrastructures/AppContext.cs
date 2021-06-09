using MicroArchitecture.Account.Domain.Commons;

namespace MicroArchitecture.Account.API.Infrastructures
{
    public class AppContext : IAppContext
    {
        private string _accessToken = string.Empty;

        public string GetAccessToken() => _accessToken;

        public void SetAccessToken(string token)
        {
            _accessToken = token;
        }
    }
}
