using autostore.Infrastructure.Repositories;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using AutoStoreProject.Shared;

namespace Autostore.Infrastructure.Services
{
    public class ValidateService<T> : IService<T> where T : User
    {
        Utilities _utilities = new AutoStoreProject.Shared.Utilities();
        private readonly IValidationRepository<T> _validationRepository;

        public ValidateService(IValidationRepository<T> validationRepository)
        {
            _validationRepository = validationRepository;
        }

        public Task<bool> IsUserExists(string email, string password)
        {
            password=_utilities.Encryption(password);
            return _validationRepository.IsUserExists(email, password);
        }

        public Task SignUp(T entity)
        {
            
            if(_validationRepository.IsUserExists(entity.Email, entity.Password).Result)
            {
                return Task.FromResult(false);
            }
            else
            {
                entity.Password = _utilities.Encryption(entity.Password);
                // _utilities.SendSecurityEmailAsync(entity.Email, entity.UserName, "SignUp", "https://localhost:7242/api/Login/VerifyEmail?email=").Wait();
                return _validationRepository.SignUp(entity);
            }
        }

        public Task<T> ValidateUser(string email, string password)
        {
            password=_utilities.Encryption(password);
            return _validationRepository.ValidateUser(email, password);
        }

        public Task<T> GetUserByEmail(string email)
        {
            return _validationRepository.GetUserByEmail(email);
        }
        public Task<bool> VerifyEmail(string email, string token)
        {
            return _validationRepository.VerifyEmail(email, token);
        }

        public Task<bool> IsUserExists(string email,int personalnr)
        {
            return _validationRepository.IsUserExists(email,personalnr);
        }
    }
}