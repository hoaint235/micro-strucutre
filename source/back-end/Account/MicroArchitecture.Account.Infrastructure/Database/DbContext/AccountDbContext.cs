using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Domain.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext
{
    public class AccountDbContext : Microsoft.EntityFrameworkCore.DbContext, IUnitOfWork
    {
        private readonly ILoggerFactory _loggerFactory;
        private readonly IMediator _mediator;

        public DbSet<User> Users { get; set; }

        public AccountDbContext(DbContextOptions<AccountDbContext> options
            , ILoggerFactory loggerFactory
            , IMediator mediator) : base(options)
        {
            _loggerFactory = loggerFactory;
            _mediator = mediator;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLoggerFactory(_loggerFactory);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(this.GetType().Assembly);
        }

        public async Task CommitAsync(CancellationToken cancellationToken = default)
        {
            await using var transaction = await Database.BeginTransactionAsync(cancellationToken);
            try
            {
                await RaiseDomainEventAsync(cancellationToken);

                SetAuditLog();

                await base.SaveChangesAsync(cancellationToken);
                await transaction.CommitAsync(cancellationToken);
            }
            catch
            {
                await transaction.RollbackAsync(cancellationToken);
                throw;
            }
        }

        private async Task RaiseDomainEventAsync(CancellationToken cancellationToken)
        {
            var entities = GetEntities();
            foreach (var entity in entities)
            {
                var domainEvents = entity.DomainEvents;
                foreach (var @event in domainEvents)
                {
                    await _mediator.Publish(@event, cancellationToken);
                }
                entity.ClearDomainEvent();
            }
        }

        private IEnumerable<Entity> GetEntities()
        {
            return ChangeTracker.Entries().Select(x => (Entity)x.Entity).ToList();
        }

        private void SetAuditLog()
        {
            var addedEntities = ChangeTracker.Entries().Where(x => x.Entity is IAudit && x.State == EntityState.Added).Select(x => (Entity)x.Entity);
            var modifiedEntities = ChangeTracker.Entries().Where(x => x.Entity is IAudit && x.State == EntityState.Modified).Select(x => (Entity)x.Entity);

            foreach (var entity in addedEntities)
            {
                var auditEntity = (IAudit)entity;
                auditEntity.CreatedBy = Guid.NewGuid();
                auditEntity.CreatedDate = DateTime.UtcNow;
                this.Entry(auditEntity).State = EntityState.Added;
            }

            foreach (var entity in modifiedEntities)
            {
                var auditEntity = (IAudit)entity;
                auditEntity.UpdatedBy = Guid.NewGuid();
                auditEntity.UpdatedDate = DateTime.UtcNow;
                this.Entry(auditEntity).State = EntityState.Modified;
            }
        }
    }
}
