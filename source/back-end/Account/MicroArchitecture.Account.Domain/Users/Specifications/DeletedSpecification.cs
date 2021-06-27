using MicroArchitecture.Account.Domain.Core.Specifications;
using System;
using System.Linq.Expressions;

namespace MicroArchitecture.Account.Domain.Users.Specifications
{
    public class DeletedSpecification : Specification<User>
    {
        public bool IsDeleted { get; set; }

        public DeletedSpecification(bool isDeleted)
        {
            IsDeleted = isDeleted;
        }

        public override Expression<Func<User, bool>> IsSatisfiedBy() => user => user.IsDeleted == IsDeleted;
    }
}
