using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace GestionHotelSahaBeach
{
    public class JwtManager
    {
        private readonly string _secretKey="SecretKey";
        public JwtManager()
        {
         var randomBytes = new byte[32];
            new Random().NextBytes(randomBytes);
            _secretKey = Convert.ToBase64String(randomBytes);
        }
        public string GenerateToken(string password,string login,string NomUser,string PrenomUser, string roles)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Convert.FromBase64String(_secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                   
                       new Claim("Password", password),
                    new Claim("Login", login),
                     new Claim("NomUser", NomUser),
                     new Claim("Prenom", PrenomUser),
                     new Claim("Roles", roles),

                }),
                Expires = DateTime.UtcNow.AddMinutes(60),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        public bool ValidateToken(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Convert.FromBase64String(_secretKey);
            var validationParameters = new TokenValidationParameters
            {
                ValidateLifetime = true,
                ValidateAudience = false,
                ValidateIssuer = false,
                IssuerSigningKey = new SymmetricSecurityKey(key)
            };

            try
            {
                tokenHandler.ValidateToken(token, validationParameters, out _);
                return true;
            }
            catch (SecurityTokenExpiredException)
            {
                return false;
            }
            catch (SecurityTokenException)
            {
                return false;
            }
        }
    }
}
