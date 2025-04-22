using System;
using AutoStoreProject.Application.DTOs;

namespace AutoStoreProject.Application.Interface;

public interface IShiftDetailService : IBaseService<ShiftDetailDto>
{
    Task<ShiftDetailDto> GetShiftById(int id);
}
