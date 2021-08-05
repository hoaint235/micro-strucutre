using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Accounts
{
    public class Profile : ValueObject
    {
        public string Email { get; private set; }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string PhoneNumber { get; private set; }
        public string CountryCode { get; private set;  }

        private Profile(string email, string phoneNumber, string firstName, string lastName, string countryCode)
        {
            Email = email;
            PhoneNumber = phoneNumber;
            FirstName = firstName;
            LastName = lastName;
            CountryCode = countryCode;
        }

        public static Profile Create(string email, string phoneNumber, string firstName, string lastName, string countryCode)
        {
            return new Profile(email, phoneNumber, firstName, lastName, countryCode);
        }

        public void Update(string phoneNumber, string firstName, string lastName, string countryCode)
        {
            CountryCode = countryCode;
            PhoneNumber = phoneNumber;
            FirstName = firstName;
            LastName = lastName;
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Email;
            yield return PhoneNumber;
        }
    }
}
