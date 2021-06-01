using System;
using System.Collections.Generic;
using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Core.Domain
{
    public abstract class Entity
    {
        public Guid Id { get; protected set; }

        private readonly List<DomainEvent> _domainEvents = new List<DomainEvent>();
        private readonly List<IntegrationEvent> _integrationEvents = new List<IntegrationEvent>();

        public IEnumerable<DomainEvent> DomainEvents => _domainEvents.AsReadOnly();
        public IEnumerable<IntegrationEvent> IntegrationEvents => _integrationEvents.AsReadOnly();

        protected Entity()
        {
            Id = Guid.NewGuid();
        }

        protected void AddDomainEvent(DomainEvent @event)
        {
            _domainEvents.Add(@event);
        }
        public void ClearDomainEvent()
        {
            _domainEvents.Clear();
        }

        protected void AddIntegrationEvent(IntegrationEvent @event)
        {
            _integrationEvents.Add(@event);
        }
        public void ClearIntegrationEvent()
        {
            _integrationEvents.Clear();
        }
    }
}
