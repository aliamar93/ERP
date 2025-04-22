using System;
using AutoStoreProject.Infrastructure.Repositories;

namespace AutoStoreProject.Domain.Entities;

public class Shift : BaseEntity
{

    public int DepartmentId { get; set; }

    public DateTime? DateTime { get; set; }

    public int? AuthorizedBy { get; set; }

    public DateTime? AuthorizedDate { get; set; }

    public int? AssignedBy { get; set; }

    public int? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public bool? Status { get; set; }

    public string Remarks { get; set; } = string.Empty;

    public ICollection<ShiftDetail> ShiftDetails { get; set; } = new List<ShiftDetail>();
}
