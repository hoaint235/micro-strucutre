using System.Linq;
using System.Threading.Tasks;
using MicroArchitecture.Account.Domain.Core.AppContext;

namespace MicroArchitecture.Account.Domain.Policies
{
    public class Master : IRole
    {
        private readonly IAppContext _appContext;

        public Master(IAppContext appContext)
        {
            _appContext = appContext;
        }

        public async Task<bool> ExecuteAsync()
        {
            var currentUser = await _appContext.GetCurrentUserAsync();
            return currentUser.Roles.Any(x => x.Name == "master");
        }
    }
}
