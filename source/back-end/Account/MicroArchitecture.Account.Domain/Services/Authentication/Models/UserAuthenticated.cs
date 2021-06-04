namespace MicroArchitecture.Account.Domain.Services.Authentication.Models
{
    public class UserAuthenticated
    {
        public string Session { get; set; }
        public string Status { get; set; }
        public AuthenResult AuthenResult { get; set; }

        public UserAuthenticated(string status, string session, AuthenResult authenResult = null)
        {
            Status = status;
            Session = session;
            AuthenResult = authenResult;
        }
    }
}
