using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PracticeDapper.Repo
{
    public interface IRepository<T> where T:class
    {
        Task<IEnumerable<T>> GetAll(string query, object? parameters);
    }
}
