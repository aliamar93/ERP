using System.Text;
using autostore.Infrastructure.Repositories;
using Autostore.Infrastructure.Services;
using AutoStoreProject.Application.DTOs;
using AutoStoreProject.Application.Interface;
using AutoStoreProject.Domain.Entities;
using AutoStoreProject.Infrastructure.Repositories;
using AutoStoreProject.Infrastructure.Services;
using AutoStoreProject.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Unity;

var builder = WebApplication.CreateBuilder(args);

//Add AutoMapper to the service collection
builder.Services.AddAutoMapper(typeof(Program).Assembly);
// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//Get the connection string from appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<SCADBContext>(options =>
    options.UseSqlServer(connectionString,options => options.EnableRetryOnFailure()));

//Add Dependency Injection for services and repositories
var container = new UnityContainer();

// container.RegisterType<IShiftRepository, ShiftRepository>();
// container.RegisterType<IShiftService, ShiftService>();
container.RegisterType(typeof(IBaseRepository<>), typeof(BaseRespository<>));
container.RegisterType(typeof(IBaseService<>), typeof(BaseService<,>));
// Register services

// container.RegisterType(typeof(IBaseRepository<Shift>),typeof(BaseRespository<Shift>));
// container.RegisterType<IBaseService<ShiftDto>,BaseService<Shift,ShiftDto>>();

builder.Services.AddSingleton<IUnityContainer>(container);


builder.Services.AddScoped<IValidationRepository<User>, validationRepository<User>>();
builder.Services.AddScoped<IService<User>, ValidateService<User>>();
builder.Services.AddScoped<IShiftRepository, ShiftRepository>();
builder.Services.AddScoped<IShiftService, ShiftService>();
builder.Services.AddScoped<IBaseRepository<Shift>,BaseRespository<Shift>>();

builder.Services.AddScoped<IShiftDetailRepository, ShiftDetailRepository>();
builder.Services.AddScoped<IShiftDetailService, ShiftDetailService>();
builder.Services.AddScoped<IBaseRepository<ShiftDetail>,BaseRespository<ShiftDetail>>();





// Add JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = builder.Environment.IsDevelopment() ? false : true; // For production, enforce HTTPS. // Set to true for production
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]))
    };
});
// Add authorization policies if needed
builder.Services.AddAuthorization(options =>
{
    // Define your authorization policies here if needed
    // For example:
    // options.AddPolicy("Admin", policy => policy.RequireClaim("Admin"));
    // options.AddPolicy("User", policy => policy.RequireClaim("User"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

builder.Logging.AddConsole();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}


// app.UseSpa(spa =>
// {
//     spa.Options.SourcePath = "ClientApp"; // or wherever your React app is

//     if (app.Environment.IsDevelopment())
//     {
//         spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
//     }
// });
app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
