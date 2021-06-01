using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Text;
using System.Threading.Tasks;
using Dapper;

namespace MicroArchitecture.Account.Infrastructure.Database.Dapper
{
    public class DapperQuery : IDapperQuery
    {
        private readonly Func<DbConnection> _dbConnectionFunc;

        public DapperQuery(Func<DbConnection> dbConnectionFunc)
        {
            _dbConnectionFunc = dbConnectionFunc;
        }

        public async Task<int> ExecuteAsync(string sql, object param = null, IDbTransaction transaction = null
            , int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return await transaction.Connection.ExecuteAsync(sql, param, transaction, commandTimeout, commandType);
            }

            await using var conn = _dbConnectionFunc();
            return await conn.ExecuteAsync(sql, param, null, commandTimeout, commandType);
        }

        public async Task<T> ExecuteScalarAsync<T>(string sql, object param = null, IDbTransaction transaction = null
            , int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return await transaction.Connection.ExecuteScalarAsync<T>(sql, param, transaction, commandTimeout, commandType);
            }

            await using var conn = _dbConnectionFunc();
            return await conn.ExecuteScalarAsync<T>(sql, param, null, commandTimeout, commandType);
        }

        public T ExecuteScalar<T>(string sql, object param = null, IDbTransaction transaction = null
            , int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return transaction.Connection.ExecuteScalar<T>(sql, param, transaction, commandTimeout, commandType);
            }

            using var conn = _dbConnectionFunc();
            return conn.ExecuteScalar<T>(sql, param, null, commandTimeout, commandType);
        }

        public async Task<IEnumerable<T>> QueryAsync<T>(string sql, object param = null, IDbTransaction transaction = null
            , int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return await transaction.Connection.QueryAsync<T>(sql, param, transaction, commandTimeout, commandType);
            }

            await using var conn = _dbConnectionFunc();
            return await conn.QueryAsync<T>(sql, param, null, commandTimeout, commandType);
        }

        public async Task<IEnumerable<T>> QueryAsync<TFirst, TSecond, T>(string sql, Func<TFirst, TSecond, T> map, object param = null
            , IDbTransaction transaction = null, bool buffered = true, string splitOn = "Id", int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return await transaction.Connection.QueryAsync(sql, map, param, transaction, buffered, splitOn, commandTimeout, commandType);
            }

            await using var conn = _dbConnectionFunc();
            return await conn.QueryAsync(sql, map, param, null, buffered, splitOn, commandTimeout, commandType);
        }

        public async Task<T> QueryFirstOrDefaultAsync<T>(string sql, object param = null, IDbTransaction transaction = null
            , int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return await transaction.Connection.QueryFirstOrDefaultAsync<T>(sql, param, transaction, commandTimeout, commandType);
            }

            await using var conn = _dbConnectionFunc();
            return await conn.QueryFirstOrDefaultAsync<T>(sql, param, null, commandTimeout, commandType);
        }

        public async Task<SqlMapper.GridReader> QueryMultipleAsync(string sql, object param = null, IDbTransaction transaction = null
            , int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return await transaction.Connection.QueryMultipleAsync(sql, param, transaction, commandTimeout, commandType);
            }

            var conn = _dbConnectionFunc();
            return await conn.QueryMultipleAsync(sql, param, null, commandTimeout, commandType);
        }

        public SqlMapper.GridReader QueryMultiple(string sql, object param = null, IDbTransaction transaction = null
            , int? commandTimeout = null, CommandType? commandType = null)
        {
            if (transaction != null)
            {
                return transaction.Connection.QueryMultiple(sql, param, transaction, commandTimeout, commandType);
            }

            var conn = _dbConnectionFunc();
            return conn.QueryMultiple(sql, param, null, commandTimeout, commandType);
        }
    }
}
