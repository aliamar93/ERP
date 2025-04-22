using System;

namespace AutoStoreProject.Shared;

public class APIResponse<T>
{
    public bool Success { get; set; }=true;
    public string? Message{get;set;}
    public T? Data{get;set;}

    public static APIResponse<T> SuccessResponse(T data, string message = "")
    {
        return new APIResponse<T>
        {
            Success = true,
            Message = message,
            Data = data
        };
    }

    public static APIResponse<T> FailureResponse(string message)
    {
        return new APIResponse<T>
        {
            Success = false,
            Message = message,
            Data = default
        };
    }

    
}
