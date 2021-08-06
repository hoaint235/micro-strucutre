using MicroArchitecture.Account.Domain.Core.Domain;

namespace MicroArchitecture.Account.Domain.Roles
{
    public class Permission : Entity
    {
        public string Name { get; private set; }
        public string LoweredName { get; private set; }

        private Permission(string name)
        {
            Name = name;
            LoweredName = name.ToLower();
        }

        public static Permission Create(string name) => new Permission(name);
    }
}
