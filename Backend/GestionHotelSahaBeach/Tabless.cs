using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("Table")]
    public class Tabless { 
  [Key]
    public int idtable { get; set; }
    public int NumTable { get; set; }
    public string? type { get; set; }
    public string? etat { get; set; }



        public double prix { get; set; }
      //  public virtual ICollection<Reservation>? Reservation { get; set; }

    }

}
