using GestionHotelSahaBeach.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data.Entity.Infrastructure;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace GestionHotelSahaBeach.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly DataContext _context;
        private readonly JwtManager _jwtManager;

        public LoginController(IConfiguration config, DataContext context, JwtManager jwtManager)
        {
            _config = config;
            _context = context;
            _jwtManager = jwtManager;
        }

        private async Task<Utilisateur> CheckCredentials(string login, string password)
        {
            if (login == null)
            {
                login = "";
            }
            if (password == null)
            {
                password = "";
            }

            var query = _context.Utilisateur
                .Where(u => u.login == login && u.password == password);

            // Check if the provider implements IDbAsyncQueryProvider
            if (query.Provider is IDbAsyncQueryProvider asyncProvider)
            {
                // Use FirstOrDefaultAsync with the provider
                return await asyncProvider.ExecuteAsync<Utilisateur>(query.Expression, CancellationToken.None);
            }
            else
            {
                // Convert the IQueryable to an IEnumerable and use FirstOrDefault
                return query.AsEnumerable().FirstOrDefault();
            }
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<Utilisateur>>> Login(UserLogin userl
            )
        {
            var user = await CheckCredentials(userl.login, userl.password);

            if (user == null)
            {
                // Renvoyer une erreur 401 Unauthorized si l'authentification échoue
                return Unauthorized();
            }
            


            var token = _jwtManager.GenerateToken(
        user.password   ,  user.login, user.NomUser, user.PrenomUser, user.roles);
            return Ok(new { token });
        }
    }
}
