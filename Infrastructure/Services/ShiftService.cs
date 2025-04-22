using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoStoreProject.Application.DTOs;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using AutoStoreProject.Infrastructure.Repositories;
using AutoStoreProject.Shared;


namespace AutoStoreProject.Infrastructure.Services

{

    public class ShiftService : BaseService<Shift,ShiftDto> , IShiftService
    {
        protected new readonly IShiftRepository _repository;
        Utilities _utilities = new Utilities();
        public ShiftService(IShiftRepository repository,IMapper mapper) : base(repository, mapper)
        {
            _repository = repository;
        }

        public async Task ApprovedShift(ShiftDto shift)
        {
            var entity = _mapper.Map<Shift>(shift);
            await  _repository.ApproveShift(entity);
            // return _repository.ApprovedShift(shift);
            // return _repository.ApprovedShift(shift.Id, shift.AuthorizedBy, shift.AuthorizedDate, shift.Status);
            // return Task.CompletedTask;
        }

        public async Task<IEnumerable<ShiftDto>> GetShiftByDetail()
        {
            try
            {
                var shifts =await _repository.GetShiftByDetail();
                // Map the ShiftDetails collection within each Shift
                // foreach (var shift in shifts)
                // {
                //     // Map ShiftDetails for each shift (if exists)
                //     shift.ShiftDetails = _mapper.Map<IEnumerable<ShiftDetailDto>>(shift.ShiftDetails).Cast<ShiftDetail>().ToList();
                // }
                return _mapper.Map<IEnumerable<ShiftDto>>(shifts);
            }
            catch(Exception ex)
            {
                throw new Exception($"{ex.Message}");
            }
        }
    }
}