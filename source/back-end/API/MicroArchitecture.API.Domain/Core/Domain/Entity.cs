using System;
using System.Collections.Generic;
using MicroArchitecture.API.Domain.Core.Events;

namespace MicroArchitecture.API.Domain.Core.Domain
{
    public abstract class Entity
    {
        public Guid Id { get; protected set; }

        private readonly static List<DomainEvent> _domainEvents = new List<DomainEvent>();
        private readonly static List<IntegrationEvent> _integrationEvents = new List<IntegrationEvent>();

        public IEnumerable<DomainEvent> DomainEvents => _domainEvents.AsReadOnly();
        public IEnumerable<IntegrationEvent> IntegrationEvents => _integrationEvents.AsReadOnly();

        protected Entity()
        {
            Id = Guid.NewGuid();
        }

        protected static void AddDomainEvent(DomainEvent @event)
        {
            _domainEvents.Add(@event);
        }
        public void ClearDomainEvent()
        {
            _domainEvents.Clear();
        }

        protected static void AddIntegrationEvent(IntegrationEvent @event)
        {
            _integrationEvents.Add(@event);
        }
        public void ClearIntegrationEvent()
        {
            _integrationEvents.Clear();
        }
    }
}
