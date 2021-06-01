using System;
using System.Linq.Expressions;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Core.Specifications
{
    public class AndSpecification<TEntity> : Specification<TEntity> where TEntity : IAggregateRoot
    {
        private readonly ISpecification<TEntity> _left;
        private readonly ISpecification<TEntity> _right;

        public AndSpecification(ISpecification<TEntity> left, ISpecification<TEntity> right)
        {
            this._left = left;
            this._right = right;
        }

        public override Expression<Func<TEntity, bool>> IsSatisfiedBy()
        {
            var leftExpression = _left.IsSatisfiedBy();
            var rightExpression = _right.IsSatisfiedBy();
            var invokedExpr = Expression.Invoke(rightExpression, leftExpression.Parameters);
            return (Expression.Lambda<Func<TEntity, bool>>(Expression.AndAlso(leftExpression.Body, invokedExpr), leftExpression.Parameters));
        }
    }
}
