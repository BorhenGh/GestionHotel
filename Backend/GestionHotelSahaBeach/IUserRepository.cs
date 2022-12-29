namespace GestionHotelSahaBeach
{
    public interface IUserRepository
    {
        Task<Utilisateur> FindByLoginAndPasswordAsync(string login, string password);
    }
}
