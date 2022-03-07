using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Reflection;
using Dapper;
using MicroArchitecture.API.Domain.Core.Database;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Infrastructure.Commons;
using MicroArchitecture.API.Infrastructure.Database.Dapper;
using MicroArchitecture.API.Infrastructure.Database.DbContext;
using MicroArchitecture.API.Infrastructure.Database.DbContext.Repositories;
using MicroArchitecture.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using MicroArchitecture.API.Domain.Core.AppContext;

namespace MicroArchitecture.API.Infrastructures.Modules
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
                typeof(ICollection<CurrentUserRole>),
                typeof(ICollection<Guid>)
            }.ForEach(type => SqlMapper.AddTypeHandler(type, new JsonObjectTypeHandler()));
        }
    }
}
