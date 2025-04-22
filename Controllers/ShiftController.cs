using AutoStoreProject.Application.DTOs;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AutoStoreProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShiftController : ControllerBase
    {
        private readonly IShiftService _shiftService;
        private readonly IShiftDetailService _shiftDetailService;
        public ShiftController(IShiftService shiftService,IShiftDetailService shiftDetailService)
        {
            _shiftService = shiftService;
            _shiftDetailService=shiftDetailService;
        }

        [HttpPost("CreateShift")]
        public async Task<IActionResult> CreateShift([FromBody] ShiftDto shift)
        {
            try
            {
                if (shift != null)
                {
                    await _shiftService.AddAsync(shift);
                    return Ok("Shift created successfully.");
                }
                
                    return BadRequest("Invalid shift data.");

                
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("GetAllShifts")]
        public async Task<IActionResult> GetAllShifts()
        {

            
            try
            {
                // var shifts = await _shiftService.GetShiftByDetail();
                var shifts = await _shiftService.GetAllAsync();
                // foreach(var shift in shifts)
                // {
                //     // shift.ShiftDetailDtos=await _shiftService.GetByIdAsync(shift.Id);
                // }
                return Ok(shifts);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("GetShiftById/{id}")]
        public async Task<IActionResult> GetShiftById(int id)
        {
            try
            {
                // var shift = await _shiftService.GetByIdAsync(id);
                var shift = await _shiftDetailService.GetShiftById(id);
                if (shift != null)
                {
                    return Ok(shift);
                }
                return NotFound("Shift not found.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }
        [HttpPost("UpdateShift")]
        public async Task<IActionResult> UpdateShift([FromBody] ShiftDto shift,int ShiftById)
        {
            try
            {
                if (shift != null)
                {
                    await _shiftService.UpdateAsync(ShiftById,shift);
                    return Ok("Shift updated successfully.");
                }
                return BadRequest("Invalid shift data.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("ApprovedShift")]
        public async Task<IActionResult> ApprovedShift([FromBody] ShiftDto shift)
        {
            try
            {
                if (shift != null)
                {
                    await _shiftService.ApprovedShift(shift);
                    return Ok("Shift approved successfully.");
                }
                return BadRequest("Invalid shift data.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }

    }
}
