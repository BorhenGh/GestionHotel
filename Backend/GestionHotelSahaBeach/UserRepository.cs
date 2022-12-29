using GestionHotelSahaBeach.Data;
using System.Data.Entity;

namespace GestionHotelSahaBeach
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Utilisateur> FindByLoginAndPasswordAsync(string login, string password)
        {
            return await _context.Utilisateur
         .Where(u => u.login == login && u.password == password)
         .SingleOrDefaultAsync();
        }
    }
}
