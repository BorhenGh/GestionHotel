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
    public class ReservationTabsController : ControllerBase
    {
        private readonly DataContext _context;

        public ReservationTabsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ReservationTabs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReservationTab>>> GetReservationTab()
        {
            return await _context.ReservationTab.ToListAsync();
        }

        // GET: api/ReservationTabs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReservationTab>> GetReservationTab(int id)
        {
            var reservationTab = await _context.ReservationTab.FindAsync(id);

            if (reservationTab == null)
            {
                return NotFound();
            }

            return reservationTab;
        }

        // PUT: api/ReservationTabs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservationTab(int id, ReservationTab reservationTab)
        {
            if (id != reservationTab.idresertab)
            {
                return BadRequest();
            }

            _context.Entry(reservationTab).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationTabExists(id))
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

        // POST: api/ReservationTabs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReservationTab>> PostReservationTab(ReservationTab reservationTab)
        {
            _context.ReservationTab.Add(reservationTab);

            var tables = await _context.tables
    .Where(c => c.idtable == reservationTab.idtable)
    .FirstOrDefaultAsync();
            tables.etat = "Réservée";
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservationTab", new { id = reservationTab.idresertab }, reservationTab);
        }

        // DELETE: api/ReservationTabs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservationTab(int id)
        {
            var reservationTab = await _context.ReservationTab.FindAsync(id);
            if (reservationTab == null)
            {
                return NotFound();
            }

            _context.ReservationTab.Remove(reservationTab);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationTabExists(int id)
        {
            return _context.ReservationTab.Any(e => e.idresertab == id);
        }
        [Route("Get TableDet")]
        [HttpGet]
        public async Task<IActionResult> GetData()

        {
            using (_context)
            {
                var data = await _context.ReservationTab
         .Join(_context.tables, t1 => t1.idtable, t2 => t2.idtable, (t1, t2) => new { t1, t2 })
         .Join(_context.client, t => t.t1.idclient, t3 => t3.idclient, (t, t3) => new { t.t1, t.t2, t3 })
         .Where(t => t.t1.idtable == t.t2.idtable && t.t1.idclient == t.t3.idclient)
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
