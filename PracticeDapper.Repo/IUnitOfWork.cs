using PracticeDapper.Models.DatabaseModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeDapper.Repo
{
    public interface IUnitOfWork
    {
        IRepository<User> UserRepository { get; }
    }
}
