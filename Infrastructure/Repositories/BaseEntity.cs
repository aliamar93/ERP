using System;

namespace AutoStoreProject.Infrastructure.Repositories;

public abstract class BaseEntity
{
    public int Id { get; set; }
    // public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    // public int CreatedBy { get; set; } = 0;
    // public bool IsActive { get; set; } = true;    
    // public string Status { get; set; } = "Active";
    // public bool IsDeleted { get; set; } = false;
    // public DateTime? UpdatedDate { get; set; } = DateTime.UtcNow;
    // public int? UpdatedBy { get; set; } = 0;
    // public string? DeletedBy { get; set; } = null;
}
