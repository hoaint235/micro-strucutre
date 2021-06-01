using System;
using System.Linq.Expressions;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Core.Specifications
{
    public abstract class Specification<TEntity> : ISpecification<TEntity> where TEntity : IAggregateRoot
    {
        public abstract Expression<Func<TEntity, bool>> IsSatisfiedBy();
        public ISpecification<TEntity> And(ISpecification<TEntity> other) => new AndSpecification<TEntity>(this, other);
        public ISpecification<TEntity> Or(ISpecification<TEntity> other) => new OrSpecification<TEntity>(this, other);
    }
}
