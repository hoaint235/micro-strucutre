using MicroArchitecture.Account.Domain.Core.Domain;
using System.Collections.Generic;

namespace MicroArchitecture.Account.Domain.Accounts
{
    public class Address : ValueObject
    {
        public string HouseNumber { get; private set; }
        public string District { get; private set; }
        public string City { get; private set; }

        private Address(string houseNumber, string district, string city)
        {
            HouseNumber = houseNumber;
            District = district;
            City = city;
        }

        public static Address Create(string houseNumber, string district, string city)
        {
            return new Address(houseNumber, district, city);
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return HouseNumber;
            yield return District;
            yield return City;
        }
    }
}
