// Project: AutoStoreProject
using AutoStoreProject.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace AutoStoreProject.Persistence;

public class SCADBContext : DbContext
{
    public SCADBContext(DbContextOptions<SCADBContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // Add your custom model configurations here
    }
    // Define your DbSet properties for your entities here

    public DbSet<User> User { get; set; }
    public DbSet<Urlaub> Urlaub { get; set; }
    public DbSet<Page> Page { get; set; }
    public DbSet<PagePermission> Permission { get; set; }
    public DbSet<Role> Role { get; set; }
    public DbSet<UrlaubDetail> UrlaubDetail { get; set; }
    public DbSet<Department> Department { get; set; }   
    public DbSet<DepartmentDetail> DepartmentDetail { get; set; }
    public DbSet<Shift> Shift { get; set; }
    public DbSet<ShiftDetail> ShiftDetail { get; set; }
    
}
