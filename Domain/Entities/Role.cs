using System;

namespace AutoStoreProject.Domain.Entities;

public class Role
{
    public int Id { get; set; }

    public string? RoleName { get; set; }

    public int? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? UpdatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }
}
