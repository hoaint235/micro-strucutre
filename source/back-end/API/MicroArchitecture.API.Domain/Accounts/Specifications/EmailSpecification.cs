using MicroArchitecture.API.Domain.Core.Specifications;
using System;
using System.Linq.Expressions;

namespace MicroArchitecture.API.Domain.Accounts.Specifications
{
    public class EmailSpecification : Specification<Account>
    {
        public string Email { get; set; }

        public EmailSpecification(string email)
        {
            Email = email;
        }

        public override Expression<Func<Account, bool>> IsSatisfiedBy() => user => user.Profile.Email == Email;
    }
}
