using System.Collections.Generic;

namespace MicroArchitecture.Account.Infrastructure.Database.Models
{
    public class RawQuery
    {
        public string Query { get; set; }
        public Dictionary<string, object> Parameters { get; set; }
    }
}
