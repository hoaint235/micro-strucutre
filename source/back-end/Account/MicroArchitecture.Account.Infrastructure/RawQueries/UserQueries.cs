using System;
using System.Collections.Generic;
using System.Text;
using MicroArchitecture.Account.Domain.Core.HttpClient;
using MicroArchitecture.Account.Infrastructure.Database.Models;

namespace MicroArchitecture.Account.Infrastructure.RawQueries
{
    public class UserQueries
    {
        public static RawQuery GetCurrentUser(Guid accountId)
        {
            return new RawQuery
            {
                Query = $@"SELECT a.id
                                , a.email
                                , a.status
                                , JSON_AGG(r.roles) AS roles
                           FROM account a
                           INNER JOIN account_role ar ON a.id = ar.account_id
                           INNER JOIN (SELECT r.id
                                            , jsonb_build_object(
                           					    'id', r.id,
                           					    'name', r.name,
                           					    'permissions', json_agg(p.lowered_name)
                           				      ) as roles
                           			   FROM role r 
                           			   INNER JOIN role_permission rp ON r.id = rp.role_id
                           			   INNER JOIN permission p ON p.id = rp.permission_id
                                       WHERE rp.is_active = true
                           			   GROUP BY r.id
                           			   	      , r.name) as r ON ar.role_id = r.id
                           WHERE a.is_deleted = false AND a.id = @AccountId 
                           GROUP BY a.id
                                  , a.email
                                  , a.status",
                Parameters = new Dictionary<string, object>
                {
                    { "AccountId" , accountId }
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
