using System;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Persistence;
using Microsoft.EntityFrameworkCore;

namespace AutoStoreProject.Infrastructure.Repositories;
public class BaseRespository<T> : IBaseRepository<T> where T : BaseEntity
{
    // Assuming you have a DbContext instance injected here
    // private readonly SCADBContext _context;
    protected readonly SCADBContext _context;
    protected readonly DbSet<T> _dbSet;

    public BaseRespository(SCADBContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }
    public async Task AddAsync(T entity) => await _dbSet.AddAsync(entity);

    public async Task DeleteAsync(int id)
    {
        try
        {
            var entity = await _dbSet.FindAsync(id);
            if (entity != null)
            {
                // entity.IsActive = true;
                _dbSet.Update(entity);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new Exception($"Entity with ID {id} not found.");
            }
        }
        catch (Exception ex)
        {
            // Handle exception (e.g., log it)
            throw new Exception("An error occurred while deleting the entity.", ex);
        }        
    }

    public Task<bool> ExistsAsync(int id) => _dbSet.AnyAsync(e => e.Id == id);

    public async Task<IEnumerable<T>> GetAllAsync()=>await _dbSet.ToListAsync();

    public async Task<T?> GetByIdAsync(int id)=>await _dbSet.FirstOrDefaultAsync(e => e.Id == id);

    public Task UpdateAsync(T entity)
    {
        try
        {
            // entity.UpdatedDate = DateTime.UtcNow;
            _dbSet.Update(entity);
            return _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException ex)
        {
            // Handle concurrency exception (e.g., log it)
            throw new Exception("An error occurred while updating the entity.", ex);
        }
        catch (DbUpdateException ex)
        {
            // Handle database update exception (e.g., log it)
            throw new Exception("An error occurred while updating the entity.", ex);
        }
        catch (Exception ex)
        {
            // Handle other exceptions (e.g., log it)
            throw new Exception("An error occurred while updating the entity.", ex);
        }
        finally
        {
            // Optionally, you can log the completion of the update operation here
        }
    }

    public void Update(T entity) => _dbSet.Update(entity);
    public void Delete(T entity)
    {
        try
        {

            // entity.IsActive = false;
            _dbSet.Update(entity);
            _context.SaveChanges();
        }
        catch (DbUpdateConcurrencyException ex)
        {
            // Handle concurrency exception (e.g., log it)
            throw new Exception("An error occurred while deleting the entity.", ex);
        }
        catch (DbUpdateException ex)
        {
            // Handle database update exception (e.g., log it)
            throw new Exception("An error occurred while deleting the entity.", ex);
        }
        catch (Exception ex)
        {
            // Handle other exceptions (e.g., log it)
            throw new Exception("An error occurred while deleting the entity.", ex);
        }
    }


    // public Task SaveChangesAsync() => _context.SaveChangesAsync();
    public void Dispose()
    {
        _context.Dispose();
    }
}
