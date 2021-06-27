using MicroArchitecture.Account.Domain.Core.Specifications;
using System;
using System.Linq.Expressions;

namespace MicroArchitecture.Account.Domain.Users.Specifications
{
    public class EmailSpecification : Specification<User>
    {
        public string Email { get; set; }

        public EmailSpecification(string email)
        {
            Email = email;
        }

        public override Expression<Func<User, bool>> IsSatisfiedBy() => user => user.Profile.Email == Email;
    }
}
