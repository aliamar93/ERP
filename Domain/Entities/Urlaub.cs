using System;

namespace AutoStoreProject.Domain.Entities;

public class Urlaub
{
     public int Id { get; set; }

    public int PersonalNr { get; set; }

    public int? NoOfDays { get; set; }

    public DateTime? CreatedDateTime { get; set; }
}
