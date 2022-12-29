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
    public class ReservationChambresController : ControllerBase
    {
        private readonly DataContext _context;
  


        public ReservationChambresController(DataContext context)
        {
            _context = context;
         
        }

        // GET: api/ReservationChambres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReservationChambre>>> GetReservationChambre()
        {
            return await _context.ReservationChambre.ToListAsync();
        }

        // GET: api/ReservationChambres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReservationChambre>> GetReservationChambre(int id)
        {
            var reservationChambre = await _context.ReservationChambre.FindAsync(id);

            if (reservationChambre == null)
            {
                return NotFound();
            }

            return reservationChambre;
        }

        // PUT: api/ReservationChambres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservationChambre(int id, ReservationChambre reservationChambre)
        {
            if (id != reservationChambre.idreserCh)
            {
                return BadRequest();
            }

            _context.Entry(reservationChambre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationChambreExists(id))
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
        

        // POST: api/ReservationChambres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReservationChambre>> PostReservationChambre(ReservationChambre reservationChambre)
        {
            
            _context.ReservationChambre.Add(reservationChambre);




            var chambre = await _context.chambre
    .Where(c => c.idchambre == reservationChambre.idchambre)
    .FirstOrDefaultAsync();
            chambre.etat = "Réservée";

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservationChambre", new { id = reservationChambre.idreserCh }, reservationChambre);
        }

        // DELETE: api/ReservationChambres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservationChambre(int id)
        {
            var reservationChambre = await _context.ReservationChambre.FindAsync(id);
            if (reservationChambre == null)
            {
                return NotFound();
            }

            _context.ReservationChambre.Remove(reservationChambre);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationChambreExists(int id)
        {
            return _context.ReservationChambre.Any(e => e.idreserCh == id);
        }
        [Route("Getnumchammbre")]
        [HttpGet]
        public async Task<IActionResult> GetData()

        {
            using (_context)
            {
                var data = await _context.ReservationChambre
         .Join(_context.chambre, t1 => t1.idchambre, t2 => t2.idchambre, (t1, t2) => new { t1, t2 })
         .Join(_context.client, t => t.t1.idclient, t3 => t3.idclient, (t, t3) => new { t.t1, t.t2, t3 })
         .Where(t => t.t1.idchambre == t.t2.idchambre && t.t1.idclient == t.t3.idclient)
         .ToListAsync();

                if (data == null)
                {
                    return NotFound();
                }

                return Ok(data);
            }
        }

    }

}
