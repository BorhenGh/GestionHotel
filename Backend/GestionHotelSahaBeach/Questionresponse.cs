using System.ComponentModel.DataAnnotations;

namespace GestionHotelSahaBeach
{
    public class Questionresponse
    {
        [Key]
     public  int idquestion { get; set; } 
        public string question { get; set; }
        public string response { get; set; }    


        
    }
}
