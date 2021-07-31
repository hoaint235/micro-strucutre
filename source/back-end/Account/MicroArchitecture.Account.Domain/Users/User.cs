using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Domain.Users.IntegrationEvents;

namespace MicroArchitecture.Account.Domain.Users
{
    public class User : Entity, IAudit, IAggregateRoot
    {
        public Profile Profile { get; private set; }
        public Address Address { get; private set; }
        public bool IsActive { get; private set; }
        public UserStatus Status { get; private set; }
        public ICollection<UserRole> Roles { get; private set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public string ExternalId { get; private set; }

        private User() { }

        private User(Profile profile, UserStatus status)
        {
            Profile = profile;
            Status = status;
        }

        private User(Profile profile, Address address, UserStatus status)
        {
            Profile = profile;
            Status = status;
            Address = address;
        }

        private static void InitRoles(User user, List<Guid> roleIds)
        {
            user.Roles = UserRole.Create(user.Id, roleIds);
            user.IsActive = true;
        }

        public static User Create(Profile profile, List<Guid> roleIds)
        {
            var user = new User(profile, UserStatus.ForceChangePassword);
            InitRoles(user, roleIds);

            AddIntegrationEvent(new UserCreatedEvent
            {
                Email = profile.Email,
                PhoneNumber = profile.PhoneNumber
            });

            return user;
        }

        public static User Create(Profile profile, Address address, List<Guid> roleIds)
        {
            var user = new User(profile, address, UserStatus.ForceChangePassword);
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
            Roles = UserRole.Create(Id, roleIds);
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

        public void UpdateStatus(UserStatus status)
        {
            Status = status;
        }
    }
}
