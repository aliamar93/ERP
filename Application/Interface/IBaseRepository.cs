using System;
using AutoStoreProject.Infrastructure.Repositories;


namespace AutoStoreProject.Application.Interface;

public interface IBaseRepository<T> where T : BaseEntity
{
    Task<T?> GetByIdAsync(int id);
    Task<IEnumerable<T>> GetAllAsync();
    Task AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(int id);
    void Update(T entity);
    void Delete(T entity);
    Task<bool> ExistsAsync(int id);
    // Task SaveChangesAsync();

    void Dispose();

}
