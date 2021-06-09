using System;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Users
{
    public class User: Entity, IAudit, IAggregateRoot
    {
        public string Email { get; private set; }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Address { get; private set; }
        public string PhoneNumber { get; private set; }
        public bool IsActive { get; private set; }
        public UseStatus Status { get; set; }
        public UserRole Role { get; set; }
        
        public Guid? CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }

        private User(string email, string firstName, string lastName, string address, string phoneNumber, UseStatus status)
        {
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            Address = address;
            PhoneNumber = phoneNumber;
            Status = status;
        }

        public static User Create(string email, string firstName, string lastName, string address, string phoneNumber, Guid roleId)
        {
            var user = new User(email, firstName, lastName, address, phoneNumber, UseStatus.ForceChangePassword);
            user.Role = UserRole.Create(user.Id, roleId);

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
