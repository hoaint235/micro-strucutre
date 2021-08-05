using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Reflection;
using Dapper;
using MicroArchitecture.Account.Domain.Core.Database;
using MicroArchitecture.Account.Domain.Accounts;
using MicroArchitecture.Account.Infrastructure.Commons;
using MicroArchitecture.Account.Infrastructure.Database.Dapper;
using MicroArchitecture.Account.Infrastructure.Database.DbContext;
using MicroArchitecture.Account.Infrastructure.Database.DbContext.Repositories;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace MicroArchitecture.Account.API.Infrastructures.Modules
{
    public class DatabaseModule : IAppModule
    {
        public void RegisterServices(IServiceCollection service, IConfiguration configuration, Assembly[] assemblies)
        {
            DefaultTypeMap.MatchNamesWithUnderscores = true;

            var connectionString = configuration.GetConnectionString(Constants.Common.ConnectionString);
            service.AddDbContext<AccountDbContext>(options =>
            {
                options.UseNpgsql(connectionString)
                    .EnableSensitiveDataLogging();
            });

            service.AddSingleton<Func<DbConnection>>(() =>
                new NpgsqlConnection(connectionString));

            service.AddScoped<IDapperQuery, DapperQuery>();
            service.AddScoped<IUnitOfWork, AccountDbContext>();
            service.AddScoped<IAccountRepository, AccountRepository>();

            new List<Type>
            {
                typeof(ICollection<Guid>)
            }.ForEach(type => SqlMapper.AddTypeHandler(type, new JsonObjectTypeHandler()));
        }
    }
}
