using System;
using System.Collections.Generic;
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
                           GROUP BY u.Id
                           	      , u.Email
                           	      , u.Status
                           AND u.IsDeleted = 0",
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

        public static RawQuery ListUser(List<Guid> roleIds)
        {
            return new RawQuery
            {
                Query = $@"SELECT DISTINCT u.Id
                           	             , u.Email
                           	             , u.IsActivate
                           	             , u.Status
                           	             , u.CreatedDate
                                         , (SELECT CONCAT('[', STRING_AGG(CONCAT('""', ur.RoleId , '""'), ',') ,']')) AS Roles
                           FROM [dbo].[User] u
                           INNER JOIN [dbo].[UserRole] ur ON u.Id = ur.UserId
                           WHERE ur.RoleId IN (@RoleIds)
                           GROUP BY u.Id
                           	      , u.Email
                           	      , u.IsActivate
                           	      , u.Status
                           	      , u.CreatedDate
                           ORDER BY u.CreatedDate DESC
                           ",
                Parameters = new Dictionary<string, object>
                {
                    { "RoleIds", roleIds } 
                }
            };
        }
    }
}
