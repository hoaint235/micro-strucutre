using System.Collections.Generic;

namespace MicroArchitecture.Account.Domain.Core.HttpClient
{
    public class ListingRequest
    {
        public int Limit { get; set; }
        public int Offset { get; set; }
        public List<Sorting> Sorts { get; set; } = new List<Sorting>();
    }
}
