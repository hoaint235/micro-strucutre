using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Core.Specifications;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Domain.Users.Specifications;
using Microsoft.EntityFrameworkCore;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext.Repositories
{
    public class UserRepository : IUserRepository
    {
        public IUnitOfWork UnitOfWork => _dbContext;
        private readonly AccountDbContext _dbContext;

        public UserRepository(AccountDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public async Task<User> GetAsync(Guid id)
        {
            return await _dbContext.Users.Include(x => x.Roles).FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<bool> AnyAsync(ISpecification<User> specification)
        {
            throw new NotImplementedException();
        }

        public void Add(User entity)
        {
            _dbContext.Add(entity);
        }

        public void Update(User entity)
        {
            _dbContext.Update(entity);
        }

        public void Delete(User entity)
        {
            _dbContext.Update(entity);
        }

        public async Task<User> FindAsync(ISpecification<User> specification)
        {
            var spec = new DeletedSpecification(false).And(specification).IsSatisfiedBy();
            return await _dbContext.Users.FirstOrDefaultAsync(spec);
        }

        public Task<IEnumerable<User>> QueryAsync(ISpecification<User> specification)
        {
            throw new NotImplementedException();
        }
    }
}
