using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Core.Specifications;
using MicroArchitecture.Account.Domain.Roles;
using MicroArchitecture.Account.Domain.Roles.Specifications;
using Microsoft.EntityFrameworkCore;

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

        public async Task<Role> GetAsync(Guid id)
        {
            return await _dbContext.Roles.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> AnyAsync(ISpecification<Role> specification)
        {
            var spec = new DeletedSpecification(false).And(specification).IsSatisfiedBy();
            return await _dbContext.Roles.AnyAsync(spec);
        }

        public void Add(Role entity)
        {
            _dbContext.Roles.Add(entity);
        }

        public void Update(Role entity)
        {
            _dbContext.Roles.Update(entity);
        }

        public void Delete(Role entity)
        {
            _dbContext.Roles.Update(entity);
        }

        public async Task<Role> FindAsync(ISpecification<Role> specification)
        {
            var spec = new DeletedSpecification(false).And(specification).IsSatisfiedBy();
            return await _dbContext.Roles.FirstOrDefaultAsync(spec);
        }

        public async Task<IEnumerable<Role>> QueryAsync(ISpecification<Role> specification)
        {
            var spec = new DeletedSpecification(false).And(specification).IsSatisfiedBy();
            return await _dbContext.Roles.Where(spec).ToListAsync();
        }
    }
}
