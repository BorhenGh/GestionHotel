using System.ComponentModel.DataAnnotations;

namespace GestionHotelSahaBeach
{
    public class client
    {
        [Key]
        public int idclient { get; set; }   
        public string? Nom { get; set; }
        public int Age { get; set; }
        public string? Types_pieces { get; set; }
        public string? numPiece { get; set; }
        public string? Adresse { get; set; }    
        public int? télephone { get; set; } 
        public DateTime? date_arrivee { get; set; }
        public DateTime? date_depart { get; set; }  


    }
}
