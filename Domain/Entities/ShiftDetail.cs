using System;
using AutoStoreProject.Infrastructure.Repositories;

namespace AutoStoreProject.Domain.Entities;

public class ShiftDetail :BaseEntity
{

    public int ShiftId { get; set; }

    public DateTime? ToDateTime { get; set; }

    public DateTime? FromDateTime { get; set; }

    public int? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public Shift Shifts { get; set; }= new Shift();
}
