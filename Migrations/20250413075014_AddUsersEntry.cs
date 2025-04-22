using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutoStoreProject.Migrations
{
    /// <inheritdoc />
    public partial class AddUsersEntry : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ILoginDate",
                table: "User",
                newName: "IsLoginDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsLoginDate",
                table: "User",
                newName: "ILoginDate");
        }
    }
}
