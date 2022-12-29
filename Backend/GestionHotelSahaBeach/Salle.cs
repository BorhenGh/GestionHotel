using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("Salle")]
    public class Salle
    {
        [Key]
        public int idsalle { get; set; }
        public string etat { get; set; }
        public string? type { get; set; }

     
        public double prix { get; set; }
    //    public virtual ICollection<Reservation>? Reservation { get; set; }

    }
   
}
