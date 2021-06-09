using System;
using System.Linq.Expressions;
using MicroArchitecture.Account.Domain.Core.Specifications;

namespace MicroArchitecture.Account.Domain.Roles.Specifications
{
    public class DeletedSpecification : Specification<Role>
    {
        public bool IsDeleted { get; set; }

        public DeletedSpecification(bool isDeleted)
        {
            IsDeleted = isDeleted;
        }

        public override Expression<Func<Role, bool>> IsSatisfiedBy() => user => user.IsDeleted == IsDeleted;
    }
}
