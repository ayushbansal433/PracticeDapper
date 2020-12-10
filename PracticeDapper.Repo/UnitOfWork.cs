using PracticeDapper.Models.DatabaseModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace PracticeDapper.Repo
{
    public class UnitOfWork : IUnitOfWork
    {
        private IRepository<User> _userRepository;
        private readonly IDbConnection _dbConnection;
        public UnitOfWork(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }
        public IRepository<User> UserRepository
        {
            get { return _userRepository ?? (_userRepository = new Repository<User>(_dbConnection)); }
        }
    }
}
