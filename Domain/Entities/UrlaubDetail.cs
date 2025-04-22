using System;

namespace AutoStoreProject.Domain.Entities;

public class UrlaubDetail
{
    public int Id { get; set; }

    public int UrlaubId { get; set; }

    public DateTime? ToDate { get; set; }

    public DateTime? FromDate { get; set; }

    public int? ApprovedBy { get; set; }

    public DateTime? ApprovedDate { get; set; }
}
