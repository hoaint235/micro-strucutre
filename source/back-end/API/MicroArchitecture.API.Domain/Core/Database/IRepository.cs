using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MicroArchitecture.API.Domain.Core.Domain;
using MicroArchitecture.API.Domain.Core.Specifications;

namespace MicroArchitecture.API.Domain.Core.Database
{
    public interface IRepository<TEntity> where TEntity : IAggregateRoot
    {
        IUnitOfWork UnitOfWork { get; }
        Task<TEntity> GetAsync(Guid id);
        Task<bool> AnyAsync(ISpecification<TEntity> specification);
        void Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        Task<TEntity> FindAsync(ISpecification<TEntity> specification);
        Task<IEnumerable<TEntity>> QueryAsync(ISpecification<TEntity> specification);
    }
}
