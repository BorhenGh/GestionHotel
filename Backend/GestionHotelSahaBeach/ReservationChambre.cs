using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("ReservChambre")]
    public class ReservationChambre
    {
        [Key]
        public int idreserCh { get; set; }
        public DateTime? Date_reser { get; set; }
        public DateTime? Date_arrivee { get; set; }
        public DateTime? Date_depart { get; set; }
        public int NombreAdultes { get; set; }
        public int NombreEnfants { get; set; }

        public int? idclient { get; set; }
        [NotMapped]
        public  client? client { get; set; }
        public int? idchambre { get; set; }
        [NotMapped]
        public virtual Chambre? chambre { get; set; }

    }
}
