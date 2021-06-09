using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Services.UserManager.Models;

namespace MicroArchitecture.Account.Domain.Services.UserManager
{
    public interface IGroupManager
    {
        Task CreateGroupAsync(Group group);
        Task UpdateGroupAsync(Group group);
        Task DeleteGroupAsync(string groupName);
    }
}
