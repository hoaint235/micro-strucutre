namespace MicroArchitecture.Account.Domain.Commons
{
    public interface IAppContext
    {
        public string GetAccessToken();
        public void SetAccessToken(string token);
    }
}
