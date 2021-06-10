using System.Threading.Tasks;

namespace MicroArchitecture.Account.Domain.Policies
{
    public interface IPolicy
    {
        string ErrorCode { get; }
        Task<bool> ExecuteAsync();
    }
}
