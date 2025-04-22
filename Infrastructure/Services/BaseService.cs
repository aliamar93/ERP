using System;
using AutoMapper;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Infrastructure.Repositories;

namespace AutoStoreProject.Infrastructure.Services;

public class BaseService<T, Dto> : IBaseService<Dto> where T : BaseEntity
{
    protected readonly IBaseRepository<T> _repository;
    protected readonly IMapper _mapper;
    public BaseService(IBaseRepository<T> repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }
    public Task AddAsync(Dto dto)
    {
        var entity = _mapper.Map<T>(dto);
        // entity.IsActive = true;
        // entity.Status = "Active";
        // entity.CreatedDate = DateTime.UtcNow;
        // entity.CreatedBy = 0; // TODO: Get the current user ID from the context or service
        return _repository.AddAsync(entity);        
    }

    public Task DeleteAsync(int id)
    {
        return _repository.DeleteAsync(id);
    }

    public Task<bool> ExistsAsync(int id)
    {
        return _repository.ExistsAsync(id);
    }

    public async Task<IEnumerable<Dto>> GetAllAsync()=> _mapper.Map<IEnumerable<Dto>>(await _repository.GetAllAsync());

    public async Task<Dto?> GetByIdAsync(int id)=>_mapper.Map<Dto?>(await _repository.GetByIdAsync(id));

    public async Task UpdateAsync(int id,Dto Dto)
    {
        var entity=_mapper.Map<T>(Dto);
        entity.Id = id;
        await _repository.UpdateAsync(entity);
        
        // return 
    }
}
