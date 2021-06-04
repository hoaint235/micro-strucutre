namespace MicroArchitecture.Account.Domain.Services.Authentication.Models
{
    public class AuthenResult
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public int ExpiredIn { get; set; }
    }
}
