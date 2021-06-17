using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using MicroArchitecture.Account.Domain.Core.HttpClient;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.Database.Models;

namespace MicroArchitecture.Account.Infrastructure.Commons.Extensions
{
    public static class RawQueriesExtensions
    {
        private const string TotalItem = "@TotalItems";

        public static async Task<ListingResponse<TResult>> ListingAsync<TResult>(this RawQuery rawQuery
            , IDapperQuery dapperQuery)
        {
            var param = new DynamicParameters();

            param.Add(TotalItem, dbType: DbType.Int32, direction: ParameterDirection.Output);

            foreach (var (key, value) in rawQuery.Parameters)
            {
                param.Add(key, value);
            }

            var result = await dapperQuery.QueryAsync<TResult>(rawQuery.Query, param);
            var totalItems = param.Get<int>(TotalItem);

            return !result.Any() ? ListingResponse<TResult>.Empty() : new ListingResponse<TResult>(result, totalItems);
        }
    }
}
