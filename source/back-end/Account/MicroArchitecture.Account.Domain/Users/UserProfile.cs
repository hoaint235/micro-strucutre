using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Users
{
    public class UserProfile : ValueObject
    {
        public string Email { get; private set; }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Address { get; private set; }
        public string PhoneNumber { get; private set; }

        private UserProfile(string email, string phoneNumber)
        {
            Email = email;
            PhoneNumber = phoneNumber;
            Address = LastName = FirstName = string.Empty;
        }

        public static UserProfile Create(string email, string phoneNumber)
        {
            return new UserProfile(email, phoneNumber);
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Email;
            yield return PhoneNumber;
        }
    }
}
