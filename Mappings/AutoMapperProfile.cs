using System;
using AutoMapper;
using AutoStoreProject.Application.DTOs;
using AutoStoreProject.Domain.Entities;

namespace AutoStoreProject.Mappings;

public class AutoMapperProfile :Profile
{
    public AutoMapperProfile()
    {
        CreateMap<User, UserDto>().ReverseMap();
    }
}

public class ShiftProfile : Profile
{
    public ShiftProfile()
    {
        CreateMap<Shift, ShiftDto>().ForMember(dest => dest.ShiftDetailDtos, opt => opt.MapFrom(src => src.ShiftDetails)); // Map ShiftDetails separately.ReverseMap();
        CreateMap<ShiftDetail, ShiftDetailDto>().ReverseMap();
        // CreateMap<Shift, CreateShiftDto>().ReverseMap();
    }
}

public class ShiftDetailProfile : Profile
{
    public ShiftDetailProfile()
    {
        CreateMap<ShiftDetail, ShiftDetailDto>().ReverseMap();
    }
}