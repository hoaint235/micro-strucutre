using MicroArchitecture.Account.Infrastructure.Database.Models;

namespace MicroArchitecture.Account.Infrastructure.RawQueries
{
    public class RoleQueries
    {
        public static RawQuery GetRoles()
        {
            return new RawQuery
            {
                Query = $@"SELECT r.Id
                                , r.Name
                                , r.Description
                                , r.CreatedDate
                           From [dbo].[Role] r
                           WHERE r.IsDeleted = 0",
            };
        }
    }
}
