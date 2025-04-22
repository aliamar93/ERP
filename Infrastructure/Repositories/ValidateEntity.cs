namespace autostore.Infrastructure.Repositories
{
    public abstract class ValidateEntity
    {
        public string Username { get; set; }= string.Empty;
        public string Password { get; set; }=string.Empty;
        public int PersonalNr { get; set; }=0;
        // public bool IsActive { get; set; } = true;
        // public bool IsDeleted { get; set; } = false;
        // public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        // public DateTime? UpdatedDate { get; set; } = DateTime.UtcNow;
    }
}