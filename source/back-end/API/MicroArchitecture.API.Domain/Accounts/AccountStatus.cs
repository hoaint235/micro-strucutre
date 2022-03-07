namespace MicroArchitecture.API.Domain.Accounts
{
    public enum AccountStatus
    {
        Archived = 0,
        Compromised = 1,
        Confirmed = 2,
        ForceChangePassword = 3,
        ResetRequired = 4,
        Unconfirmed = 5,
        Unknown = 6
    }
}
