using System;

namespace AutoStoreProject.Application.Interface;

public interface IBaseService<TDto>
{
    Task<TDto?> GetByIdAsync(int id);
    Task<IEnumerable<TDto>> GetAllAsync();
    Task AddAsync(TDto entity);
    Task UpdateAsync(int id,TDto entity);
    Task DeleteAsync(int id);
    Task<bool> ExistsAsync(int id);
}
