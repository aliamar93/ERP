using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Runtime.CompilerServices;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace AutoStoreProject.Shared;

public class Utilities
{
     // Ensure this key is 32 bytes for AES-256
    // You should store this key securely and not hard-code it in production code

    private  readonly string SecretKey;
    private  readonly string Issuer;
    private  readonly string Audience;

    private readonly string Email;
    private readonly string Password;
    private readonly string SmtpServer;
    private readonly int Port;
    private readonly string key ; // 16 bytes for AES-128 (you can use 32 bytes for AES-256)
    private readonly string iv ; // 16 bytes IV for AES
     public Utilities()
    {
        // IConfiguration configuration
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

        key = configuration["Encryption:Key"] ?? throw new Exception("Encryption key not found in configuration.");
        iv = configuration["Encryption:IV"] ?? throw new Exception("IV not found in configuration.");
        SecretKey = configuration["Jwt:SecretKey"] ?? throw new Exception("Secret key not found in configuration.");
        Issuer = configuration["Jwt:Issuer"] ?? throw new Exception("Issuer not found in configuration.");
        Audience = configuration["Jwt:Audience"] ?? throw new Exception("Audience not found in configuration.");
        Email = configuration["SMTP:Email"] ?? throw new Exception("Email address not found in configuration.");
        Password = configuration["SMTP:Password"] ?? throw new Exception("Email password not found in configuration.");
        SmtpServer = configuration["SMTP:SmtpServer"] ?? throw new Exception("SMTP server not found in configuration.");
        Port = int.TryParse(configuration["SMTP:Port"], out var port) ? port : throw new Exception("SMTP port not found in configuration.");

    }
    // This is a placeholder for your actual configuration retrieval method
    public string Encryption(string plainText)
    {
      using (Aes aesAlg = Aes.Create())
        {
            aesAlg.Key = Encoding.UTF8.GetBytes(key);
            aesAlg.IV = Encoding.UTF8.GetBytes(iv);
            
            ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);
            
            using (MemoryStream ms = new MemoryStream())
            {
                using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                {
                    using (StreamWriter sw = new StreamWriter(cs))
                    {
                        sw.Write(plainText);
                    }
                }
                return Convert.ToBase64String(ms.ToArray());
            }
        }
    }
   public string Decryption(string cipherText)
{
    using (Aes aesAlg = Aes.Create())
        {
            aesAlg.Key = Encoding.UTF8.GetBytes(key);
            aesAlg.IV = Encoding.UTF8.GetBytes(iv);
            
            ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);
            
            using (MemoryStream ms = new MemoryStream(Convert.FromBase64String(cipherText)))
            {
                using (CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read))
                {
                    using (StreamReader sr = new StreamReader(cs))
                    {
                        return sr.ReadToEnd();
                    }
                }
            }
        }
}
    public  string GetCurrentDateTimeInFormat(string format, string timeZoneId)
    {
        TimeZoneInfo timeZone = TimeZoneInfo.FindSystemTimeZoneById(timeZoneId);
        DateTime currentDateTime = TimeZoneInfo.ConvertTime(DateTime.Now, timeZone);
        return currentDateTime.ToString(format);
    }
    public  string GetCurrentDateTime()
    {
        return DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
    }
    public  string GetCurrentDate()
    {
        return DateTime.Now.ToString("yyyy-MM-dd");
    }
    public  string GetCurrentTime()
    {
        return DateTime.Now.ToString("HH:mm:ss");
    }
    public  string GetCurrentDateTimeInFormat(string format)
    {
        return DateTime.Now.ToString(format);
    }

    public  string GenerateJwtToken(string username)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: Issuer,
                audience: Audience,
                claims: claims,
                expires: DateTime.Now.AddMinutes(5),  // Token expiration time
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

     public  string GenerateSecureKey(int length)
    {
        byte[] keyBytes = new byte[length]; // 32 bytes = 256 bits
        RandomNumberGenerator.Fill(keyBytes);
        return Convert.ToBase64String(keyBytes);
    }
    // public  string GenerateSecureKeyCrypto(int length)
    // {
    //     using (var rng = new RNGCryptoServiceProvider())
    //     {
    //         byte[] randomNumber = new byte[length];
    //         rng.GetBytes(randomNumber);
    //         return Convert.ToBase64String(randomNumber);
    //     }
    // }

    public string DecodeJwtToken(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var jwtToken = handler.ReadJwtToken(token);

        // foreach (var claim in jwtToken.Claims)
        // {
        //     Console.WriteLine($"{claim.Type}: {claim.Value}");
        // }
        // throw new NotImplementedException();
        var username = jwtToken.Claims.FirstOrDefault(c => c.Type == "unique_name" || c.Type == "sub")?.Value;
        return username ?? "Username not found";
    }

    public string GenerateJwtTokenForUser(string userNameOrEmail)
    {
        throw new NotImplementedException();
    }

    public async Task SendSecurityEmailAsync(string email, int personalnr, string action, string actionUrl)
   {
    var from = new MailAddress(Email, "Welcome to Autostore");
    // Use your SMTP server credentials here
    var to = new MailAddress(email);
    var password = Password; // Use a secure way to store and retrieve this password

    using var smtp = new SmtpClient
    {
        Host = SmtpServer,
        Port = Port,
        EnableSsl = true,
        Credentials = new NetworkCredential(from.Address, password)
    };

    var message = new MailMessage(from, to)
    {
        Subject = "Confirm Your E-Mail Address",
        IsBodyHtml = true
    };

    //string templateType=Enum.GetName(typeof(TemplateType), action);
    // string templatePath = GetTemplate((TemplateType)Enum.Parse(typeof(TemplateType), templateType));
    string templatetype=GetTemplate(Enum.Parse<TemplateType>(action));


    // Load template and replace values
    var template = System.IO.File.ReadAllText(templatetype)
        .Replace("{{PersonalNr}}", personalnr.ToString())
        .Replace("{{Action}}", action)
        .Replace("{{ActionUrl}}", actionUrl); 
    
    // var template = System.IO.File.ReadAllText("Template/SignUpTemplate.html")
    //     .Replace("{{UserName}}", userName)
    //     .Replace("{{Action}}", action)
    //     .Replace("{{ActionUrl}}", actionUrl);

    // Attach logo
    var htmlView = AlternateView.CreateAlternateViewFromString(template, null, "text/html");
    var logo = new LinkedResource("./Template/images/logo.svg", MediaTypeNames.Image.Svg)
    {
        ContentId = "logo"
    };
    htmlView.LinkedResources.Add(logo);
    message.AlternateViews.Add(htmlView);

    await smtp.SendMailAsync(message);
}

    public enum TemplateType
    {

        SignUp,
        PasswordReset,
        EmailVerification
    }

    public string GetTemplate(TemplateType templateType)
{
    string templatePath = templateType switch
    {
        TemplateType.SignUp => "Template/SignUpTemplate.html",
        TemplateType.PasswordReset => "Template/PasswordResetTemplate.html",
        TemplateType.EmailVerification => "Template/EmailVerificationTemplate.html",
        _ => throw new ArgumentOutOfRangeException(nameof(templateType), templateType, null)
    };

    return templatePath;

}
// public string GetCurrentIpAddress()
// {
//     var request = HttpContextAccessor.HttpContext.Request;
//     string ipAddress = request.Headers["X-Forwarded-For"].FirstOrDefault() ?? request.HttpContext.Connection.RemoteIpAddress.ToString();
//     return ipAddress;
// }

// public string GetCurrentUrl()
// {
//     var request = HttpContextAccessor.HttpContext.Request;
//     string url = $"{request.Scheme}://{request.Host}{request.Path}";
//     return url;
// }

    public ClaimsPrincipal ValidateToken(string token)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(SecretKey);

        var parameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false,
            ClockSkew = TimeSpan.Zero
        };

        SecurityToken validatedToken;
        var principal = tokenHandler.ValidateToken(token, parameters, out validatedToken);
        return principal;
    }



}
