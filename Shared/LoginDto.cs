namespace AutoStoreProject.Shared
{
    public class LoginDto
    {
        public string userNameOrEmail { get; set; }= string.Empty;
        public string Password{get;set;}= string.Empty;

        public int PersonalNr {get;set;}
    }
}