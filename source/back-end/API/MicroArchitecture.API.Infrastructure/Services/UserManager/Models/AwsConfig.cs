namespace MicroArchitecture.API.Infrastructure.Services.UserManager.Models
{
    public class AwsConfig
    {
        public string PoolId { get; set; }
        public string ClientId { get; set; }
        public string Region { get; set; }
        public CertificateConfig Certificate { get; set; }
    }
}
