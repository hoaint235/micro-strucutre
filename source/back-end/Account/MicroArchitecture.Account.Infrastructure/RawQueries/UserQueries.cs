using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MicroArchitecture.Account.Domain.Core.HttpClient;
using MicroArchitecture.Account.Infrastructure.Database.Models;

namespace MicroArchitecture.Account.Infrastructure.RawQueries
{
    public class UserQueries
    {
        public static RawQuery GetCurrentUser(Guid userId)
        {
            return new RawQuery
            {
                Query = $@"SELECT a.id
                                , a.email
                                , a.status
                                , JSON_AGG(DISTINCT ar.role_id) AS roles
                           FROM account a
                           INNER JOIN account_role ar ON a.id = ar.account_id
                           WHERE a.is_deleted = false AND a.id = @UserId 
                           GROUP BY a.id
                                  , a.email
                                  , a.status",
                Parameters = new Dictionary<string, object>
                {
                    {"UserId", userId}
                }
            };
        }

        public static RawQuery GetCurrentUserId(string externalId)
        {
            return new RawQuery
            {
                Query = $@"SELECT a.id
                           FROM account a
                           WHERE a.is_deleted = false
                             AND a.external_id = @ExternalId",
                Parameters = new Dictionary<string, object>
                {
                    {"ExternalId", externalId}
                }
            };
        }

        public static RawQuery ListUser(ListingRequest request, Guid currentUserId, List<Guid> roleIds)
        {
            var parameters = new Dictionary<string, object>
            {
                { "Limit", request.Limit },
                { "Offset", request.Offset },
                { "RoleIds", roleIds },
                { "CurrentUserId", currentUserId },
            };

            var orderByClause = request.BuildSorting("a.created_date DESC");

            var whereByClause = new StringBuilder();
            if(!string.IsNullOrWhiteSpace(request.Search))
            {
                whereByClause.Append("AND u.email ILIKE CONCAT('%',@Search,'%') ");
                parameters.Add("Search", request.Search);
            }

            return new RawQuery
            {
                Query = $@"SELECT a.id
                           	    , a.email
                           	    , a.is_active
                           	    , a.status
                           	    , a.created_date
                                , JSON_AGG(DISTINCT ar.role_id) AS roles
                           	    , COUNT(*) OVER() AS total_items
                           FROM account a 
                           INNER JOIN account_role ar ON a.id = ar.account_id 
                           WHERE a.is_deleted = false 
                             AND ar.role_id = ANY(@RoleIds) 
                             AND a.id != @CurrentUserId {whereByClause} 
                           GROUP BY a.id
                           	      , a.email
                           	      , a.is_active
                           	      , a.status
                           	      , a.created_date 
                           ORDER BY {orderByClause} 
                           LIMIT @Limit OFFSET @Offset ",
                Parameters = parameters
            };
        }
    }
}
