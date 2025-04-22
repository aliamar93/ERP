using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutoStoreProject.Migrations
{
    /// <inheritdoc />
    public partial class AddShiftRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ShiftDetail_ShiftId",
                table: "ShiftDetail",
                column: "ShiftId");

            migrationBuilder.AddForeignKey(
                name: "FK_ShiftDetail_Shift_ShiftId",
                table: "ShiftDetail",
                column: "ShiftId",
                principalTable: "Shift",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShiftDetail_Shift_ShiftId",
                table: "ShiftDetail");

            migrationBuilder.DropIndex(
                name: "IX_ShiftDetail_ShiftId",
                table: "ShiftDetail");
        }
    }
}
