using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("ReservationSalle")]
    public class ReservationSalle
    {
        [Key]
        public int idresersalle { get; set; }
        public DateTime? Date_reser { get; set; }
        public DateTime? Date_arrivee { get; set; }
        public DateTime? Date_depart { get; set; }
        public int NombrePersonnes { get; set; }
       
        public int? idclient { get; set; }
        [NotMapped]
        public virtual client? client { get; set; }
        public int? idsalle { get; set; }
        [NotMapped]
        public virtual Salle? salle { get; set; }
    }
}
