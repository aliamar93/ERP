using System;
using AutoStoreProject.Domain.Entities;

namespace AutoStoreProject.Application.DTOs;

public class ShiftDetailDto
{
    public int Id { get; set; }
    public int ShiftId { get; set; }

    public DateTime? ToDateTime { get; set; }

    public DateTime? FromDateTime { get; set; }

    public int? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    // public ShiftDto Shifts {get;set;}=new ShiftDto();
}
