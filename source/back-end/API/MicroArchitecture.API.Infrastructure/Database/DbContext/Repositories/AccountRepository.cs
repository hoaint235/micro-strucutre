using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Domain.Core.Database;
using MicroArchitecture.API.Domain.Core.Specifications;
using MicroArchitecture.API.Domain.Accounts.Specifications;

namespace MicroArchitecture.API.Infrastructure.Database.DbContext.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        public IUnitOfWork UnitOfWork => _dbContext;
        private readonly AccountDbContext _dbContext;

        public AccountRepository(AccountDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public async Task<Account> GetAsync(Guid id)
        {
            return await _dbContext.Accounts.Include(x => x.Roles).FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<bool> AnyAsync(ISpecification<Account> specification)
        {
            throw new NotImplementedException();
        }

        public void Add(Account entity)
        {
            _dbContext.Add(entity);
        }

        public void Update(Account entity)
        {
            _dbContext.Update(entity);
        }

        public void Delete(Account entity)
        {
            _dbContext.Update(entity);
        }

        public async Task<Account> FindAsync(ISpecification<Account> specification)
        {
            var spec = new DeletedSpecification(false).And(specification).IsSatisfiedBy();
            return await _dbContext.Accounts.FirstOrDefaultAsync(spec);
        }

        public Task<IEnumerable<Account>> QueryAsync(ISpecification<Account> specification)
        {
            throw new NotImplementedException();
        }
    }
}
