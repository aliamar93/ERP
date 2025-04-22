using autostore.Infrastructure.Repositories;
using AutoStoreProject.Domain.Entities;

namespace AutoStoreProject.Application.Interface
{
    public interface IValidationRepository<T> where T : class
    {
        Task<T> ValidateUser(string email, string password);
        Task<bool> IsUserExists(string email,int personalnr);
        Task<bool> IsUserExists(string email, string password);

        Task SignUp(T entity);

        Task<T> GetUserByEmail(string email);
        Task<bool> VerifyEmail(string email, string token);


    }
}