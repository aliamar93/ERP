using AutoStoreProject.Domain.Entities;

namespace AutoStoreProject.Application.Interface;

public interface IShiftDetailRepository : IBaseRepository<ShiftDetail>
{
        Task<ShiftDetail> GetShiftById(int id);

}
