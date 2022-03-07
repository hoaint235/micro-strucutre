namespace MicroArchitecture.API.Infrastructure.Services.Email.Models
{
    public class SmtpParameterConfiguration
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Domain { get; set; }
        public bool EnableSsl { get; set; }
    }
}
