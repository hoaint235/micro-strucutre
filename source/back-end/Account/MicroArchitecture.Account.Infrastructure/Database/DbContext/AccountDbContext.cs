using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MassTransit;
using MediatR;
using MicroArchitecture.Account.Domain.Core.AppContext;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Core.Domain;
using MicroArchitecture.Account.Domain.Core.Events;
using MicroArchitecture.Account.Domain.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace MicroArchitecture.Account.Infrastructure.Database.DbContext
{
    public class AccountDbContext : Microsoft.EntityFrameworkCore.DbContext, IUnitOfWork
    {
        private readonly ILoggerFactory _loggerFactory;
        private readonly IMediator _mediator;
        private readonly IPublishEndpoint _publishEndPoint;
        private readonly IAppContext _appContext;

        public DbSet<User> Users { get; set; }

        public AccountDbContext(DbContextOptions<AccountDbContext> options
            , ILoggerFactory loggerFactory
            , IMediator mediator
            , IAppContext appContext
            , IPublishEndpoint publishEndPoint) : base(options)
        {
            _loggerFactory = loggerFactory;
            _mediator = mediator;
            _appContext = appContext;
            _publishEndPoint = publishEndPoint;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLoggerFactory(_loggerFactory);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Ignore<DomainEvent>();
            modelBuilder.Ignore<IntegrationEvent>();
            modelBuilder.Entity<User>().ToTable("User").HasKey(x => x.Id);
            modelBuilder.Entity<User>().OwnsOne(o => o.Profile, pro =>
            {
                pro.Property(x => x.Email).HasColumnName("Email");
                pro.Property(x => x.Address).HasColumnName("Address");
                pro.Property(x => x.PhoneNumber).HasColumnName("PhoneNumber");
                pro.Property(x => x.FirstName).HasColumnName("FirstName");
                pro.Property(x => x.LastName).HasColumnName("LastName");
            });
        }

        public async Task CommitAsync(CancellationToken cancellationToken = default)
        {
            await using var transaction = await Database.BeginTransactionAsync(cancellationToken);
            {
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

            await RaiseIntegrationEventAsync(cancellationToken);
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

        private Task RaiseIntegrationEventAsync(CancellationToken cancellationToken)
        {
            var entities = GetEntities();
            foreach (var entity in entities)
            {
                var integrationEvents = entity.IntegrationEvents;
                foreach (var @event in integrationEvents)
                {
                    _ = Task.Run(async () =>
                      {
                          await _publishEndPoint.Publish(@event, @event.GetType(), cancellationToken);
                      });
                }
                entity.ClearIntegrationEvent();
            }

            return Task.CompletedTask;
        }

        private IEnumerable<Entity> GetEntities()
        {
            return ChangeTracker.Entries().Where(x => x.Entity is Entity).Select(x => (Entity)x.Entity).ToList();
        }

        private void SetAuditLog()
        {
            var addedEntities = ChangeTracker.Entries().Where(x => x.Entity is IAudit && x.State == EntityState.Added).Select(x => (Entity)x.Entity);
            var modifiedEntities = ChangeTracker.Entries().Where(x => x.Entity is IAudit && x.State == EntityState.Modified).Select(x => (Entity)x.Entity);

            var currentUserId = _appContext.GetCurrentUserId();
            foreach (var entity in addedEntities)
            {
                var auditEntity = (IAudit)entity;
                auditEntity.CreatedBy = currentUserId;
                auditEntity.CreatedDate = DateTime.UtcNow;
                this.Entry(auditEntity).State = EntityState.Added;
            }

            foreach (var entity in modifiedEntities)
            {
                var auditEntity = (IAudit)entity;
                auditEntity.UpdatedBy = currentUserId;
                auditEntity.UpdatedDate = DateTime.UtcNow;
                this.Entry(auditEntity).State = EntityState.Modified;
            }
        }
    }
}
