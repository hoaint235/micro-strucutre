using System;
using System.Linq.Expressions;
using MicroArchitecture.API.Domain.Core.Domain;

namespace MicroArchitecture.API.Domain.Core.Specifications
{
    public class OrSpecification<TEntity> : Specification<TEntity> where TEntity : IAggregateRoot
    {
        private readonly ISpecification<TEntity> _left;
        private readonly ISpecification<TEntity> _right;

        public OrSpecification(ISpecification<TEntity> left, ISpecification<TEntity> right)
        {
            _left = left;
            _right = right;
        }

        public override Expression<Func<TEntity, bool>> IsSatisfiedBy()
        {
            var leftExpression = _left.IsSatisfiedBy();
            var rightExpression = _right.IsSatisfiedBy();
            var invokedExpr = Expression.Invoke(rightExpression, leftExpression.Parameters);
            return Expression.Lambda<Func<TEntity, bool>>(Expression.OrElse(leftExpression.Body, invokedExpr), leftExpression.Parameters);
        }
    }
}
