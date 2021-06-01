﻿using System;
using System.Linq.Expressions;
using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Core.Specifications
{
    public interface ISpecification<TEntity> where TEntity : IAggregateRoot
    {
        Expression<Func<TEntity, bool>> IsSatisfiedBy();
        ISpecification<TEntity> And(ISpecification<TEntity> other);
        ISpecification<TEntity> Or(ISpecification<TEntity> other);
    }
}
