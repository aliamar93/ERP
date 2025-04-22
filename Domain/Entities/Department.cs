using System;

namespace AutoStoreProject.Domain.Entities;

public class Department
{
    public int Id { get; set; }

    public string? DepartmentName { get; set; }

    public int? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? UpdatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public bool? Status { get; set; }

}
