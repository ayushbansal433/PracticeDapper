using System;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace PracticeDapper.Repo
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly IDbConnection _dbConnection;

        public Repository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<T>> GetAll(string query, object? parameters)
        {
            return await _dbConnection.QueryAsync<T>(query, parameters);
        }

        public async Task<T> GetDbSet(string query, object? parameters)
        {
            return await _dbConnection.QueryFirstOrDefaultAsync<T>(query, parameters);
        }

        public async Task<int> Add(string query, T data)
        {
            return await _dbConnection.ExecuteAsync(query, data);
        }

        public async Task<int> Upadte(string query, T data)
        {
            return await _dbConnection.ExecuteAsync(query, data);
        }

        public async Task<int> Delete(string query, object? parameters)
        {
            return await _dbConnection.ExecuteAsync(query, parameters);
        }
    }
}
