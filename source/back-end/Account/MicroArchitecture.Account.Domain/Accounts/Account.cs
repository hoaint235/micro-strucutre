using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Domain.Accounts.IntegrationEvents;

namespace MicroArchitecture.Account.Domain.Accounts
{
    public class Account : Entity, IAudit, IAggregateRoot
    {
        public Profile Profile { get; private set; }
        public Address Address { get; private set; }
        public bool IsActive { get; private set; }
        public AccountStatus Status { get; private set; }
        public ICollection<AccountRole> Roles { get; private set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public string ExternalId { get; private set; }

        private Account() { }

        private Account(Profile profile, AccountStatus status)
        {
            Profile = profile;
            Status = status;
        }

        private Account(Profile profile, Address address, AccountStatus status)
        {
            Profile = profile;
            Status = status;
            Address = address;
        }

        private static void InitRoles(Account user, List<Guid> roleIds)
        {
            user.Roles = AccountRole.Create(user.Id, roleIds);
            user.IsActive = true;
        }

        public static Account Create(Profile profile, List<Guid> roleIds)
        {
            var user = new Account(profile, AccountStatus.ForceChangePassword);
            InitRoles(user, roleIds);

            AddIntegrationEvent(new UserCreatedEvent
            {
                Email = profile.Email,
                PhoneNumber = profile.PhoneNumber
            });

            return user;
        }

        public static Account Create(Profile profile, Address address, List<Guid> roleIds)
        {
            var user = new Account(profile, address, AccountStatus.ForceChangePassword);
            InitRoles(user, roleIds);

            AddIntegrationEvent(new UserCreatedEvent
            {
                Email = profile.Email,
                PhoneNumber = profile.PhoneNumber
            });

            return user;
        }

        public void Activate()
        {
            IsActive = true;
            AddIntegrationEvent(new ActivateUserEvent
            {
                UserName = Profile.Email
            });
        }

        public void Deactivate()
        {
            IsActive = false;
            AddIntegrationEvent(new DeactivateUserEvent
            {
                UserName = Profile.Email
            });
        }

        public void UpdateRoles(List<Guid> roleIds)
        {
            Roles = AccountRole.Create(Id, roleIds);
        }

        public void Deleted()
        {
            IsDeleted = true;
            AddIntegrationEvent(new UserDeletedEvent
            {
                UserName = Profile.Email
            });
        }

        public void UpdateExternalId(string id)
        {
            ExternalId = id;
        }

        public void UpdateStatus(AccountStatus status)
        {
            Status = status;
        }
    }
}
