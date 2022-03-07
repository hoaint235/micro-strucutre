using System.Collections.Generic;

namespace MicroArchitecture.API.Domain.Services.Email.Models
{
    public class EmailMessage
    {
        public string Language { get; set; }
        public string Subject { get; set; }
        public string Template { get; set; }
        public string FromDisplayName { get; set; }
        public string FromAddress { get; set; }
        public IEnumerable<string> To { get; set; }
        public IEnumerable<string> Cc { get; set; }
    }
}
