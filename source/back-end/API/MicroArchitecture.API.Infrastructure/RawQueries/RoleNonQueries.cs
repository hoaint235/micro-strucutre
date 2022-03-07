using MicroArchitecture.API.Domain.Commons.Models;
using MicroArchitecture.API.Infrastructure.Database.Models;
using System.Collections.Generic;
using System.Linq;

namespace MicroArchitecture.API.Infrastructure.RawQueries
{
    public class RoleNonQueries
    {
        public static RawQuery UpdatePermissions(IEnumerable<PermissionStatus> permissions)
        {
            return new RawQuery
            {
                Query = $@"WITH permissions AS (
                                SELECT rp.id
                                , split_part(p.name, '-', 1) AS permission
                                , split_part(p.name, '-', 2) AS action
                                , r.name AS role
                                FROM role_permission rp
                                INNER JOIN permission p ON rp.permission_id = p.id
                                INNER JOIN role r ON rp.role_id = r.id
                           )
                           
                           UPDATE role_permission
                           SET is_active = @IsActive
                           FROM permissions p
                           WHERE role_permission.id = p.id AND p.role = @Role AND p.permission = @Permission AND p.action = @Action",
                Parameters = permissions.Select(x =>
                new
                {
                    Role = x.Role.ToString(),
                    Permission = x.Permission.ToString(),
                    Action = x.Action.ToString(),
                    x.IsActive
                })
            };
        }
    }
}
