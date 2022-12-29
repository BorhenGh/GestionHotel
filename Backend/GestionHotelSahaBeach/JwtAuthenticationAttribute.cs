using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace GestionHotelSahaBeach
{
    public class JwtAuthenticationAttribute
    {
        private readonly JwtManager _jwtManager;
        private readonly IConfiguration _config;
        public JwtAuthenticationAttribute(JwtManager jwtManager, IConfiguration config)
        {
            _jwtManager = jwtManager;
            _config = config;
        }
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            // Vérifiez si l'en-tête de la requête contient un jeton JWT
            var authHeader = context.HttpContext.Request.Headers["Authorization"];
            if (authHeader.Count > 0 && authHeader[0].StartsWith("Bearer "))
            {
                var token = authHeader[0].Substring("Bearer ".Length);
                // Vérifiez la validité du jeton
                if (_jwtManager.ValidateToken(token))
                {
                    return;
                }
            }
            context.Result = new UnauthorizedResult();
        }
    }
}
