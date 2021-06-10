using System.Threading.Tasks;

namespace MicroArchitecture.Account.Domain.Policies
{
    public interface IRole
    {
        Task<bool> ExecuteAsync();
    }
}
