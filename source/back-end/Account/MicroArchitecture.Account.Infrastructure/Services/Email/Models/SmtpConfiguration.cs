namespace MicroArchitecture.Account.Infrastructure.Services.Email.Models
{
    public class SmtpConfiguration
    {
        public string DefaultFromAddress { get; set; }
        public string DefaultFromDisplayName { get; set; }
        public SmtpParameterConfiguration Parameters { get; set; }
    }
}
