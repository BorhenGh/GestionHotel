using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GestionHotelSahaBeach;
using GestionHotelSahaBeach.Data;
using System.Data;
using System.Data.SqlClient;

namespace GestionHotelSahaBeach.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChambresController : ControllerBase
    {
        private readonly DataContext _context;
  
        public ChambresController(DataContext context)
        {
            _context = context;


        }

        // GET: api/Chambres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Chambre>>> Getchambre()

        {
            return await _context.chambre.ToListAsync();
        }
       
        // GET: api/Chambres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Chambre>> GetChambre(int id)
        {
            var chambre = await _context.chambre.FindAsync(id);

            if (chambre == null)
            {
                return NotFound();
            }

            return chambre;
        }

        // PUT: api/Chambres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChambre(int id, Chambre chambre)
        {
            if (id != chambre.idchambre)
            {
                return BadRequest();
            }

            _context.Entry(chambre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChambreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Chambres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Chambre>> PostChambre(Chambre chambre)
        {
            _context.chambre.Add(chambre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChambre", new { id = chambre.idchambre }, chambre);
        }
        [Route("GetDispoCh")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Chambre>>> Getchambree()

        {
            var chambres = _context.chambre
            .Where(c => c.etat == "Disponible")
        .ToList();

            return chambres;
        }


        // DELETE: api/Chambres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChambre(int id)
        {
            var chambre = await _context.chambre.FindAsync(id);
            if (chambre == null)
            {
                return NotFound();
            }

            _context.chambre.Remove(chambre);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ChambreExists(int id)
        {
            return _context.chambre.Any(e => e.idchambre == id);
        }
    }
}
