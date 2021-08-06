using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Core.Specifications;
using MicroArchitecture.Account.Domain.Roles;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext.Repositories
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
            throw new NotImplementedException();
        }
    }
}
