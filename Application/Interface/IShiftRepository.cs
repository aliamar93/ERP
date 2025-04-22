
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;

namespace AutoStoreProject.Application.Interface
{

    public interface IShiftRepository : IBaseRepository<Shift>
    {
        Task ApproveShift(Shift shift);

        Task <IEnumerable<Shift>> GetShiftByDetail();
    }
}