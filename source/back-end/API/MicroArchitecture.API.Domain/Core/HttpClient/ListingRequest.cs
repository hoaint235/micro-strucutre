using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MicroArchitecture.API.Domain.Core.HttpClient
{
    public class ListingRequest
    {
        public int Limit { get; set; }
        public int Offset { get; set; }
        public string Search { get; set; }
        public List<Sorting> Sorts { get; set; } = new List<Sorting>();

        public string BuildSorting(string defaultOrder)
        {
            var orderByClause = new StringBuilder();
            orderByClause.Append(defaultOrder);

            if (Sorts.Any())
            {
                orderByClause.Clear();
                Sorts.ForEach(sort =>
                {
                    orderByClause.Append($"{sort.Field} {sort.Direction} ,");
                });
                orderByClause = orderByClause.Remove(orderByClause.Length - 1, 1);
            }

            return orderByClause.ToString();
        }
    }
}
