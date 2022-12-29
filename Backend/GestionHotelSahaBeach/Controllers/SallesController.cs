using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GestionHotelSahaBeach;
using GestionHotelSahaBeach.Data;

namespace GestionHotelSahaBeach.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SallesController : ControllerBase
    {
        private readonly DataContext _context;

        public SallesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Salles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salle>>> Getsalle()
        {
            return await _context.salle.ToListAsync();
        }
        [Route("GetDispoSalles")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salle>>> GetsalleDispo()

        {
            var salless = _context.salle
            .Where(c => c.etat == "Disponible")
        .ToList();

            return salless;
        }

        // GET: api/Salles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Salle>> GetSalle(int id)
        {
            var salle = await _context.salle.FindAsync(id);

            if (salle == null)
            {
                return NotFound();
            }

            return salle;
        }

        // PUT: api/Salles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalle(int id, Salle salle)
        {
            if (id != salle.idsalle)
            {
                return BadRequest();
            }

            _context.Entry(salle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalleExists(id))
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

        // POST: api/Salles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Salle>> PostSalle(Salle salle)
        {
            _context.salle.Add(salle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalle", new { id = salle.idsalle }, salle);
        }

        // DELETE: api/Salles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalle(int id)
        {
            var salle = await _context.salle.FindAsync(id);
            if (salle == null)
            {
                return NotFound();
            }

            _context.salle.Remove(salle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalleExists(int id)
        {
            return _context.salle.Any(e => e.idsalle == id);
        }
    }
}
