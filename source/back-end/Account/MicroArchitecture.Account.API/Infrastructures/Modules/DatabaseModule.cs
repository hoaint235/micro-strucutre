using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class DatabaseModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            //var sqlConnectionString = configuration.GetConnectionString(Constants.Common.ConnectionString);
            //service.AddDbContext<ConnectServiceDbContext>(options =>
            //{
            //    options.UseSqlServer(sqlConnectionString)
            //        .EnableSensitiveDataLogging();
            //});

            //service.AddSingleton<Func<DbConnection>>(() =>
            //    new SqlConnection(sqlConnectionString));

            //service.AddScoped<IDapperQuery, DapperQuery>();
            //service.AddScoped<IUnitOfWork, ConnectServiceDbContext>();
            //service.AddScoped<IDistributorRepository, DistributorRepository>();
            //service.AddScoped<IUserRepository, UserRepository>();

            //new List<Type>
            //{
            //    typeof(IEnumerable<Guid>)
            //}.ForEach(type => SqlMapper.AddTypeHandler(type, new JsonObjectTypeHandler()));
        }
    }
}
