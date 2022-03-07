using System.Threading.Tasks;

namespace MicroArchitecture.API.Domain.Policies
{
    public interface IPolicy
    {
        string ErrorCode { get; }
        Task<bool> ExecuteAsync();
    }
}
