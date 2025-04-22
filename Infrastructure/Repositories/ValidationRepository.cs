using autostore.Infrastructure.Repositories;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using AutoStoreProject.Persistence;
using Microsoft.EntityFrameworkCore;

namespace AutoStoreProject.Infrastructure.Repositories
{
    public class validationRepository<T> : IValidationRepository<T> where T : User
    {
        protected readonly SCADBContext _context;
        protected readonly DbSet<T> _dbSet;

        public validationRepository(SCADBContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }
        public Task<bool> IsUserExists(string email,int personalnr)
        {
            try
            {
                return _context.User.Where(e => e.PersonalNr == personalnr && e.Email == email).AnyAsync();
            }
            catch (Exception ex)
            {
                // Handle exception (e.g., log it)
                throw new Exception("An error occurred while checking if the user exists.", ex);
            }
        }

        public Task<bool> IsUserExists(string Email, string password)
        {
            try
            {
                return _context.User.Where(e => e.Email == Email).AnyAsync();
            }
            catch (Exception ex)
            {
                // Handle exception (e.g., log it)
                throw new Exception("An error occurred while checking if the user exists.", ex);
            }
        }

        public Task SignUp(T entity)
        {
            try
            {
                entity.UserName= entity.Email.Split('@')[0]!= null ? entity.Email.Split('@')[0]: entity.UserName;
                entity.IsActive = false;
                entity.Islogin = false;
                entity.CreatedBy = 0;
                entity.CreatedDate = DateTime.UtcNow;
                _context.User.Add(entity);
                return _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Handle exception (e.g., log it)
                throw new Exception("An error occurred while signing up the user.", ex);
            }
        }

        public Task<T> ValidateUser(string email, string password)
        {
            try{
                
                var entityTask = _context.User
                .Where(e => 
                    e.Email == email &&
                    e.Password == password &&
                    e.IsActive == true 
                    // &&
                    // (e.Islogin == false || 
                    // (DateTime.Now - e.CreatedDate.Value).TotalMinutes > 10)
                    )
                .FirstOrDefaultAsync();

                if(entityTask.Result !=null)
                {
                    entityTask.Result.IsLoginDate=DateTime.UtcNow;
                    entityTask.Result.Islogin = true;
                    _context.SaveChangesAsync();
                }
                return entityTask.ContinueWith(task => (T)(object)task.Result);
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
                // Handle exception (e.g., log it)
                throw new Exception("An error occurred while validating the user.", ex);
            }
        }
        public Task<T> GetUserByEmail(string email)
        {
            try
            {
                return _context.User.Where(e => e.Email == email).FirstOrDefaultAsync().ContinueWith(task => (T)(object)task.Result);
            }
            catch (Exception ex)
            {
                // Handle exception (e.g., log it)
                throw new Exception("An error occurred while getting the user by email.", ex);
            }
        }

        public Task<bool> VerifyEmail(string email, string token)
        {
            try
            {
                var user = _context.User.Where(e => e.Email == email).FirstOrDefaultAsync();
                // var user = _context.User.Where(e => e.Email == email && e.Token == token).FirstOrDefaultAsync();
                if (user.Result != null)
                {
                    user.Result.IsActive = true;
                    _context.SaveChangesAsync();
                    return Task.FromResult(true);
                }
                else
                {
                    return Task.FromResult(false);
                }
            }
            catch (Exception ex)
            {
                // Handle exception (e.g., log it)
                throw new Exception("An error occurred while verifying the email.", ex);
            }
        }
    }
}