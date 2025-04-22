using System;

namespace AutoStoreProject.Domain.Entities;

public class DepartmentDetail
{
 public int Id { get; set; }

    public int DepartmentId { get; set; }

    public int PersonalNr { get; set; }

    public string? Status { get; set; }

    public int? RoleId { get; set; }

    public string? WorkStation { get; set; }
}
