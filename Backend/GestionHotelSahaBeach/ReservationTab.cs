using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("ReservationTab")]
    public class ReservationTab
    {
        [Key]
        public int idresertab { get; set; }
        public DateTime? Date_reser { get; set; }
        public DateTime? Date_arrivee { get; set; }
        public DateTime? Date_depart { get; set; }
        public int NombrePersonnes { get; set; }
        
        public int? idclient { get; set; }
        [NotMapped]
        public virtual client? client { get; set; }
        public int? idtable { get; set; }
        [NotMapped]
        public virtual Tabless? tabless { get; set; }
    }
}
