namespace MicroArchitecture.API.Domain.Commons.Models
{
    public class PermissionStatus
    {
        public ActionType Action { get; set; }
        public PermissionType Permission { get; set; }
        public RoleType Role { get; set; }
        public bool IsActive { get; set; }
    }
}
