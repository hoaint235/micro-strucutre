using MicroArchitecture.Account.Infrastructure.Database.Models;
using System;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Infrastructure.RawQueries
{
    public class RoleQueries
    {
        public static RawQuery GetPermission(Guid accountId, string permissionName)
        {
            return new RawQuery
            {
                Query = $@"SELECT 1
                           FROM account_role ar 
                           INNER JOIN role_permission rp ON ar.role_id = rp.role_id
                           INNER JOIN permission p ON p.id = rp.permission_id
                           WHERE p.lowered_name = @PermissionName 
                             AND ar.account_id = @AccountId",
                Parameters = new Dictionary<string, object>
                {
                    { "PermissionName", permissionName },
                    { "AccountId", accountId }
                }
            };
        }
    }
}
