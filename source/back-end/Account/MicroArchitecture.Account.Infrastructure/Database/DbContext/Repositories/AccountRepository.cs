using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Core.Specifications;
using MicroArchitecture.Account.Domain.Accounts;
using Microsoft.EntityFrameworkCore;
using MicroArchitecture.Account.Domain.Accounts.Specifications;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        public IUnitOfWork UnitOfWork => _dbContext;
        private readonly AccountDbContext _dbContext;

        public AccountRepository(AccountDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public async Task<Domain.Accounts.Account> GetAsync(Guid id)
        {
            return await _dbContext.Accounts.Include(x => x.Roles).FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<bool> AnyAsync(ISpecification<Domain.Accounts.Account> specification)
        {
            throw new NotImplementedException();
        }

        public void Add(Domain.Accounts.Account entity)
        {
            _dbContext.Add(entity);
        }

        public void Update(Domain.Accounts.Account entity)
        {
            _dbContext.Update(entity);
        }

        public void Delete(Domain.Accounts.Account entity)
        {
            _dbContext.Update(entity);
        }

        public async Task<Domain.Accounts.Account> FindAsync(ISpecification<Domain.Accounts.Account> specification)
        {
            var spec = new DeletedSpecification(false).And(specification).IsSatisfiedBy();
            return await _dbContext.Accounts.FirstOrDefaultAsync(spec);
        }

        public Task<IEnumerable<Domain.Accounts.Account>> QueryAsync(ISpecification<Domain.Accounts.Account> specification)
        {
            throw new NotImplementedException();
        }
    }
}
