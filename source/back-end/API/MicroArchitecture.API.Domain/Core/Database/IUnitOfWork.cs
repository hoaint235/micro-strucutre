using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Domain.Core.Database
{
    public interface IUnitOfWork
    {
        Task CommitAsync(CancellationToken cancellationToken = default);
    }
}
