namespace AutoStoreProject.Application.DTOs
{

    public class ShiftDto
    {
        public int Id { get; set; }
        public int DepartmentId { get; set; }

        public DateTime? DateTime { get; set; }

        public int? AuthorizedBy { get; set; }

        public DateTime? AuthorizedDate { get; set; }

        public int? AssignedBy { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? CreatedDate { get; set; }

        public bool? Status { get; set; }

        public string Remarks { get; set; } = string.Empty;

        public ICollection<ShiftDetailDto> ShiftDetailDtos{get;set;}
    }
}