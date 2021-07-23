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
                Query = $@"SELECT u.Id
                                , u.Email
                                , u.Status
                                , (SELECT CONCAT('[', STRING_AGG(CONCAT('""', ur.RoleId , '""'), ',') ,']')) AS Roles
                           FROM [dbo].[User] u 
                           INNER JOIN [dbo].[UserRole] ur ON u.Id = ur.UserId 
                           WHERE u.Id = @UserId 
                             AND u.IsDeleted = 0 
                           GROUP BY u.Id
                           	      , u.Email
                           	      , u.Status",
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
                Query = $@"SELECT u.Id
                           FROM [dbo].[User] u
                           WHERE u.ExternalId = @ExternalId
                             AND u.IsDeleted = 0",
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

            var orderByClause = request.BuildSorting("u.CreatedDate DESC");

            var whereByClause = new StringBuilder();
            if(!string.IsNullOrWhiteSpace(request.Search))
            {
                whereByClause.Append("AND u.Email LIKE @Search ");
                parameters.Add("Search", $"%{request.Search}%");
            }

            return new RawQuery
            {
                Query = $@"SELECT u.Id
                           	    , u.Email
                           	    , u.IsActivate
                           	    , u.Status
                           	    , u.CreatedDate
                                , (SELECT CONCAT('[', STRING_AGG(CONCAT('""', ur.RoleId , '""'), ',') ,']')) AS Roles 
                           INTO #TempUser                           
                           FROM [dbo].[User] u 
                           INNER JOIN [dbo].[UserRole] ur ON u.Id = ur.UserId 
                           WHERE u.IsDeleted = 0 AND ur.RoleId IN @RoleIds AND u.Id != @CurrentUserId {whereByClause} 
                           GROUP BY u.Id
                           	      , u.Email
                           	      , u.IsActivate
                           	      , u.Status
                           	      , u.CreatedDate 

                           SELECT @TotalItems = COUNT(1) FROM #TempUser;
                           
                           SELECT * 
                           FROM #TempUser u 
                           ORDER BY {orderByClause} 
                           OFFSET @Offset ROWS 
                           FETCH NEXT @Limit ROWS ONLY 
                           
                           DROP TABLE #TempUser",
                Parameters = parameters
            };
        }
    }
}
