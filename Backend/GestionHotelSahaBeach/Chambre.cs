using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("Chambre")]
    public class Chambre
    {
        [Key]
        public int idchambre { get; set; }
        public int NumChambre { get; set; }
        public int NbrePlaces { get; set; }
        public string? etat { get; set; }
        public string? type { get; set; }
        public double prix { get; set; }
        
      //  public virtual ICollection<Reservation>?  Reservation { get; set; }
    
      

    }

}
