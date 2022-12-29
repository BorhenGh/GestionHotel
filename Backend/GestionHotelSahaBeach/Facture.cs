using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("Facture")]
    public class Facture
    {
        [Key]
        public int idfacture { get; set; }
        [DataType(DataType.Date)]
        [Display(Name = "Date Facture")]
        public DateTime? date_facture { get; set; }

        public double montant { get; set; }
        public int? idclient { get; set; }
        public virtual client? client { get; set; }
    }
}
