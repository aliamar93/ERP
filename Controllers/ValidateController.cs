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
    [AutoValidateAntiforgeryToken]
    public class ValidateController : ControllerBase
    {
        //ValidateService
        private readonly IService<User> _service;
        private readonly Utilities _utilities = new Utilities();
        //public APIResponse<object> _apiResponse = new APIResponse<object>();
        public APIResponse<bool> _apiResponse = new APIResponse<bool>();
        public ValidateController(IService<User> service)
        {
            _service = service;
        }
        [IgnoreAntiforgeryToken] // Disable for this action
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
            _apiResponse = new APIResponse<bool>();

            try
            {
                var request = HttpContext.Request;
                var currentUrl = $"{request.Scheme}://{request.Host}";

                if (loginDto != null)
                {
                    var user = new User
                    {
                        Email = loginDto.userNameOrEmail,
                        PersonalNr = loginDto.PersonalNr,
                        Password = loginDto.Password,
                    };
                    if (!await _service.SignUp(user))
                    {
                        _apiResponse = APIResponse<bool>.FailureResponse("User Already Exist"); // Fixed the error by qualifying with the type name
                    }
                    else
                    {

                        _utilities.SendSecurityEmailAsync(loginDto.userNameOrEmail, loginDto.PersonalNr, "SignUp", $"{currentUrl}/api/Validate/VerifyEmail?email={user.Email}").Wait();
                        _apiResponse = APIResponse<bool>.SuccessResponse(true, "User signed up successfully."); // Ensure consistency with static method usage

                    }

                    return Ok(_apiResponse);
                }
                else
                {
                    return BadRequest("Invalid user data.");
                }
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
