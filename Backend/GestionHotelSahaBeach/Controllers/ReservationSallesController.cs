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
    public class ReservationSallesController : ControllerBase
    {
        private readonly DataContext _context;

        public ReservationSallesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ReservationSalles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReservationSalle>>> GetReservationSalle()
        {
            return await _context.ReservationSalle.ToListAsync();
        }

        // GET: api/ReservationSalles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReservationSalle>> GetReservationSalle(int id)
        {
            var reservationSalle = await _context.ReservationSalle.FindAsync(id);

            if (reservationSalle == null)
            {
                return NotFound();
            }

            return reservationSalle;
        }

        // PUT: api/ReservationSalles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservationSalle(int id, ReservationSalle reservationSalle)
        {
            if (id != reservationSalle.idresersalle)
            {
                return BadRequest();
            }

            _context.Entry(reservationSalle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationSalleExists(id))
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

        // POST: api/ReservationSalles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReservationSalle>> PostReservationSalle(ReservationSalle reservationSalle)
        {
            _context.ReservationSalle.Add(reservationSalle);


            var salle = await _context.salle
    .Where(c => c.idsalle == reservationSalle.idsalle)
    .FirstOrDefaultAsync();
            salle.etat = "Réservée";
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservationSalle", new { id = reservationSalle.idresersalle }, reservationSalle);
        }

        // DELETE: api/ReservationSalles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservationSalle(int id)
        {
            var reservationSalle = await _context.ReservationSalle.FindAsync(id);
            if (reservationSalle == null)
            {
                return NotFound();
            }

            _context.ReservationSalle.Remove(reservationSalle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationSalleExists(int id)
        {
            return _context.ReservationSalle.Any(e => e.idresersalle == id);
        }
        [Route("GetSalleDet")]
        [HttpGet]
        public async Task<IActionResult> GetData()

        {
            using (_context)
            {
                var data = await _context.ReservationSalle
         .Join(_context.salle, t1 => t1.idsalle, t2 => t2.idsalle, (t1, t2) => new { t1, t2 })
         .Join(_context.client, t => t.t1.idclient, t3 => t3.idclient, (t, t3) => new { t.t1, t.t2, t3 })
         .Where(t => t.t1.idsalle == t.t2.idsalle && t.t1.idclient == t.t3.idclient)
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
