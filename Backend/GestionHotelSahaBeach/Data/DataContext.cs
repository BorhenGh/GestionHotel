using Microsoft.EntityFrameworkCore;

namespace GestionHotelSahaBeach.Data
{
    public class DataContext : DbContext
    {
        public DataContext() { }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
       
        public virtual DbSet<Utilisateur> Utilisateur { get; set; }
        public virtual DbSet<Facture> factures { get; set; }
        public virtual DbSet<ReservationChambre> ReservationChambre { get; set; }
        public virtual DbSet<ReservationSalle> ReservationSalle { get; set; }
        public virtual DbSet<ReservationTab> ReservationTab { get; set; }
        public virtual DbSet<Salle> salle { get; set; }
        public virtual DbSet<Tabless> tables { get; set; }
       
        public virtual DbSet<client> client { get; set; }
        public virtual DbSet<Chambre> chambre { get; set; }
        public virtual DbSet<Questionresponse> Questionresponse { get; set; }



    }
}

