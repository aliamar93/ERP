using System;
using AutoMapper;
using AutoStoreProject.Application.DTOs;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;

namespace AutoStoreProject.Infrastructure.Services;

public class ShiftDetailService :BaseService<ShiftDetail,ShiftDetailDto>,IShiftDetailService
{
    protected new readonly IShiftDetailRepository _repository;
    public ShiftDetailService(IShiftDetailRepository repository, IMapper mapper) : base(repository, mapper)
    {
        _repository = repository;
    }

    public async Task<ShiftDetailDto> GetShiftById(int id)
    {
        var shiftDetail = await _repository.GetShiftById(id);
        return _mapper.Map<ShiftDetailDto>(shiftDetail);
    }
}
