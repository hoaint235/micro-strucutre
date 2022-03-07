using MicroArchitecture.API.Domain.Core.Database;
using MicroArchitecture.API.Domain.Core.Specifications;
using MicroArchitecture.API.Domain.Roles;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Infrastructure.Database.DbContext.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        public IUnitOfWork UnitOfWork => _dbContext;
        private readonly AccountDbContext _dbContext;

        public RoleRepository(AccountDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public void Add(Role entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AnyAsync(ISpecification<Role> specification)
        {
            throw new NotImplementedException();
        }

        public void Delete(Role entity)
        {
        }

        public Task<Role> FindAsync(ISpecification<Role> specification)
        {
            throw new NotImplementedException();
        }

        public Task<Role> GetAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Role>> QueryAsync(ISpecification<Role> specification)
        {
            throw new NotImplementedException();
        }

        public void Update(Role entity)
        {
            _dbContext.Update(entity);
            _dbContext.Update(entity.RolePermissions);
        }
    }
}
