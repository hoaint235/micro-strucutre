using System.Collections.Generic;

namespace MicroArchitecture.API.Infrastructure.Database.Models
{
    public class RawQuery
    {
        public string Query { get; set; }
        public object Parameters { get; set; }
    }
}
