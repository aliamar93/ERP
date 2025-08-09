namespace AutoStoreProject.Application.Interface
{
    //IValidateService.cs
    public interface IService <T>
    {
        Task<T> ValidateUser(string email, string password); 
        Task<bool> IsUserExists(string email, int personalnr);
        Task<bool> IsUserExists(string email, string password);
        Task<bool> SignUp(T entity);
        Task <T> GetUserByEmail(string email);
        Task<bool> VerifyEmail(string email, string token);
    }
}