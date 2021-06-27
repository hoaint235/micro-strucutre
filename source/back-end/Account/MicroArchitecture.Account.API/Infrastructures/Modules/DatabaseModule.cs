using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Reflection;
using Dapper;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.Database.DbContext;
using MicroArchitecture.Account.Infrastructure.Database.DbContext.Repositories;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class DatabaseModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            var sqlConnectionString = configuration.GetConnectionString(Constants.Common.ConnectionString);
            service.AddDbContext<AccountDbContext>(options =>
            {
                options.UseSqlServer(sqlConnectionString)
                    .EnableSensitiveDataLogging();
            });

            service.AddSingleton<Func<DbConnection>>(() =>
                new SqlConnection(sqlConnectionString));

            service.AddScoped<IDapperQuery, DapperQuery>();
            service.AddScoped<IUnitOfWork, AccountDbContext>();
            service.AddScoped<IUserRepository, UserRepository>();

            new List<Type>
            {
                typeof(ICollection<Guid>)
            }.ForEach(type => SqlMapper.AddTypeHandler(type, new JsonObjectTypeHandler()));
        }
    }
}
