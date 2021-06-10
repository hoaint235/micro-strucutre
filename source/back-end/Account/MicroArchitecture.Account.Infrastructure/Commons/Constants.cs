namespace MicroArchitecture.Account.Infrastructure.Commons
{
    public class Constants
    {
        public static class Common
        {
            public const string AllowAllPolicy = "AllowAllPolicy";
            public const string ConnectionString = "SqlConnection";
            public const string XCorrelationId = "x-correlation-id";
            public const string XRequestId = "x-request-id";
            public const string AwsConfig = "Aws";
            public const string EmailConfig = "Email:Providers:SMTP";
            public const string CacheConfig = "Cache";
            public const string DefaultCreatedBy = "326a1f62-8b86-4304-9aed-38cbcc24ef5d";
            public const string AuthorizationHeader = "Authorization";
        }

        public static class StatusCode
        {
            public const int InternalServerError = 500;
            public const int Forbidden = 403;
            public const int Unauthorized = 401;
            public const int BadRequest = 400;
        }
    }
}
