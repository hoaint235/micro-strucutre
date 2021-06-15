using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Users
{
    public class User: Entity, IAudit, IAggregateRoot
    {
        public UserProfile Profile { get; private set; }
        public bool IsActive { get; private set; }
        public UseStatus Status { get; private set; }
        public ICollection<UserRole> Roles { get; private set; }
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

        private User(UserProfile profile, UseStatus status)
        {
            Profile = profile;
            Status = status;
        }

        public static User Create(string email, string phoneNumber, List<Guid> roleIds)
        {
            var profile = UserProfile.Create(email, phoneNumber);
            var user = new User(profile, UseStatus.ForceChangePassword);
            user.Roles = UserRole.Create(user.Id, roleIds);
            user.IsActive = true;

            return user;
        }

        public void Activate()
        {
            IsActive = true;
        }

        public void Deactivate()
        {
            IsActive = false;
        }
    }
}
