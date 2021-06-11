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
                                , (SELECT r.Id
                                	 , r.Name
                                FOR JSON PATH) as Roles
                           FROM [dbo].[User] u 
                           INNER JOIN [dbo].[UserRole] ur ON u.Id = ur.UserId
                           INNER JOIN [dbo].[Role] r ON r.Id = ur.RoleId
                           WHERE u.Id = @UserId
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
    }
}
