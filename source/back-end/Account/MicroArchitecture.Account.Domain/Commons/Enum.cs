namespace MicroArchitecture.Account.Domain.Commons
{
    public enum RoleType
    {
        Admin = 1,
        MasterData = 2,
        Manager = 3,
        User = 4
    }

    public enum PermissionType
    {
        Account = 1,
        Vendor = 2,
        Product = 3,
        Unit = 4,
        Category = 5,
        Permission = 6
    } 

    public enum ActionType
    {
        View = 1,
        Add = 2,
        Edit = 3,
        Delete = 4
    }
}
