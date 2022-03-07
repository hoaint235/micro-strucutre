using MicroArchitecture.API.Domain.Core.Specifications;
using System;
using System.Linq.Expressions;

namespace MicroArchitecture.API.Domain.Accounts.Specifications
{
    public class DeletedSpecification : Specification<Account>
    {
        public bool IsDeleted { get; set; }

        public DeletedSpecification(bool isDeleted)
        {
            IsDeleted = isDeleted;
        }

        public override Expression<Func<Account, bool>> IsSatisfiedBy() => user => user.IsDeleted == IsDeleted;
    }
}
