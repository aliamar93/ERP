using System;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using AutoStoreProject.Persistence;
using Microsoft.EntityFrameworkCore;

namespace AutoStoreProject.Infrastructure.Repositories;

public class ShiftDetailRepository: BaseRespository<ShiftDetail>, IShiftDetailRepository
{
    public ShiftDetailRepository(SCADBContext context) : base(context)
    {
    }

    public Task<ShiftDetail> GetShiftById(int id)
    {
        try
        {
            var shiftDetail = _context.ShiftDetail.Where(x => x.ShiftId == id).FirstOrDefaultAsync();
            if (shiftDetail == null)
            {
                throw new Exception($"Shift Detail No {id} Exist");
            }
            return shiftDetail;

        }
        catch(Exception ex)
        {
                throw new Exception("Error : ",ex);
        }
    }
}
