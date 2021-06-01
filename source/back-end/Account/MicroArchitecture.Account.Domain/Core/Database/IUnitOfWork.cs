using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Domain.Core.Database
{
    public interface IUnitOfWork
    {
        Task CommitAsync(CancellationToken cancellationToken = default);
    }
}
