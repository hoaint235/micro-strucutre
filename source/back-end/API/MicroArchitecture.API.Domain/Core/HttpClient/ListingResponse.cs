using System.Collections.Generic;
using System.Linq;

namespace MicroArchitecture.API.Domain.Core.HttpClient
{
    public class ListingResponse<TData> : ListingRequest
    {
        public IEnumerable<TData> Data { get; }
        public int TotalItems { get; set; }
        public ListingResponse(IEnumerable<TData> data, int totalItems)
        {
            Data = data;
            TotalItems = totalItems;
        }

        public static ListingResponse<TData> Empty()
        {
            return new ListingResponse<TData>(Enumerable.Empty<TData>(), 0);
        }
    }
}
