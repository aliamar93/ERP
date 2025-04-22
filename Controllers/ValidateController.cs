using System.Buffers.Text;
using autostore.Infrastructure.Repositories;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using AutoStoreProject.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AutoStoreProject.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValidateController : ControllerBase
    {
        private readonly IService<User> _service;
        private readonly Utilities _utilities = new Utilities();
        public ValidateController(IService<User> service)
        {
            _service = service;
        }

        [HttpPost("ValidateUser")]
        public async Task<IActionResult> ValidateUser([FromBody] LoginDto loginDto)
        {
            string token = string.Empty;
            try
            {
                var user = await _service.ValidateUser(loginDto.userNameOrEmail, loginDto.Password);
                if (user != null)
                {
                    token=_utilities.GenerateJwtToken($"{user.Email}+@+{user.PersonalNr}");
                    // token=_utilities.DecodeJwtToken(token);
                    return Ok(new{User=user, Token=token});
                }
                return NotFound("User not found.");


            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("SignUp")]
        public async Task<IActionResult> SignUp([FromBody] LoginDto loginDto)
        {
            try
            {
                var request = HttpContext.Request;
                var currentUrl = $"{request.Scheme}://{request.Host}";
                // var currentUrl = $"{request.Scheme}://{request.Host}{request.Path}{request.QueryString}";

                if (loginDto != null)
                {
                    var user = new User
                    {
                        Email = loginDto.userNameOrEmail,
                        PersonalNr = loginDto.PersonalNr,
                        Password = loginDto.Password,
                    };
                    await _service.SignUp(user);
                    _utilities.SendSecurityEmailAsync(loginDto.userNameOrEmail, loginDto.PersonalNr, "SignUp", $"{currentUrl}/api/Validate/VerifyEmail?email={user.Email}").Wait();
                    return Ok("User signed up successfully.");
                }
                else
                {
                    return BadRequest("Invalid user data.");
                }

                // if (entity is null)
                // {
                //     return BadRequest("Invalid user data.");
                // }
                // else if (await _service.IsUserExists(entity.Username, entity.Password))
                // {
                //     return Conflict("User already exists.");
                // }
                // else if (await _service.IsUserExists(entity.PersonalNr))
                // {
                //     return Conflict("Personal number already exists.");
                // }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("VerifyEmail")]
        public async Task<IActionResult> VerifyEmail(string email)
        {
            try
            {
                // string decryptedEmail = _utilities.Decryption(loginDto.userNameOrEmail); // Assuming email is base64 encoded
                string decryptedEmail =email;
                if (!string.IsNullOrEmpty(decryptedEmail))
                {
                    await _service.VerifyEmail(decryptedEmail, "user.Token");
                    return Ok("Email verified successfully.");
                }
                return NotFound("User not found.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }
    }
}
