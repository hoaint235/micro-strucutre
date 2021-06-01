﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Domain.Core.Specifications;

namespace MicroArchitecture.Account.Domain.Core.Database
{
    public interface IRepository<TEntity> where TEntity : IAggregateRoot
    {
        IUnitOfWork UnitOfWork { get; }
        Task<TEntity> GetAsync(Guid id);
        Task<bool> AnyAsync(ISpecification<TEntity> specification);
        void Add(TEntity user);
        void Update(TEntity user);
        void Delete(TEntity user);
        Task<TEntity> FindAsync(ISpecification<TEntity> specification);
        Task<IEnumerable<TEntity>> QueryAsync(ISpecification<TEntity> specification);
    }
}
