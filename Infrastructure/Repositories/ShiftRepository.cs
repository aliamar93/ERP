using System.Collections.Generic;
using AutoStoreProject.Infrastructure.Repositories;
using System.Threading.Tasks;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using AutoStoreProject.Persistence;
namespace AutoStoreProject.Infrastructure.Repositories
{
    public class ShiftRepository : AutoStoreProject.Infrastructure.Repositories.BaseRespository<Shift>, IShiftRepository
    {
        public ShiftRepository(SCADBContext context)  : base(context)
        {

        }
        public Task ApproveShift(Shift shift)
        {
            try
            {
               var existingShift=_context.Shift.Find(shift.Id);
               if(existingShift !=null )
               {
                     existingShift.AuthorizedBy = shift.AuthorizedBy;
                     existingShift.AuthorizedDate = DateTime.UtcNow;
                     existingShift.Status = true;
                     _context.Entry(existingShift).State = EntityState.Modified;
                     return _context.SaveChangesAsync();
                }
                else
                {
                     throw new Exception($"Shift with ID {shift.Id} not found.");
               }
            }
            catch (DbUpdateConcurrencyException ex)
            {
                // Handle concurrency exception (e.g., log it)
                throw new Exception("An error occurred while updating the entity.", ex);
            }
        }

        public async Task<IEnumerable<Shift>> GetShiftByDetail()
        {
             try
            {
               var existingShift=_context.Shift.Include(s=>s.ShiftDetails).AsEnumerable<Shift>();
               if(existingShift is null )
               {
                     throw new Exception($"Shifts not found.");
                }
                return existingShift;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                // Handle concurrency exception (e.g., log it)
                throw new Exception("An error occurred while updating the entity.", ex);
            }
        }
    }
}