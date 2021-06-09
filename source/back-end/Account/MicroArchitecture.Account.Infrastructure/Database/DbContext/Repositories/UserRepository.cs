using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Core.Specifications;
using MicroArchitecture.Account.Domain.Users;
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
            return await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<bool> AnyAsync(ISpecification<User> specification)
        {
            throw new NotImplementedException();
        }

        public void Add(User user)
        {
            throw new NotImplementedException();
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }

        public void Delete(User user)
        {
            throw new NotImplementedException();
        }

        public Task<User> FindAsync(ISpecification<User> specification)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> QueryAsync(ISpecification<User> specification)
        {
            throw new NotImplementedException();
        }
    }
}
