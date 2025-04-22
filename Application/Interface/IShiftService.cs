using AutoStoreProject.Application.DTOs;
using AutoStoreProject.Domain.Entities;

namespace AutoStoreProject.Application.Interface
{
    public interface IShiftService: IBaseService<ShiftDto>
    {
        Task ApprovedShift(ShiftDto shift);

        Task<IEnumerable<ShiftDto>> GetShiftByDetail();
    }
}