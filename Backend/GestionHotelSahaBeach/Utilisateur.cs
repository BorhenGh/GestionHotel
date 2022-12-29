using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionHotelSahaBeach
{
    [Table("Utilisateur")]
    public class Utilisateur { 
    [Key]
    public int iduser { get; set; }

    [StringLength(50)]
    public string login { get; set; } = String.Empty;
        [StringLength(100)]
        public string NomUser { get; set; } = String.Empty;
        [StringLength(100)]
        public string PrenomUser { get; set; } = String.Empty;

        public string  password { get; set; }
    public string roles { get; set; }

}

}
