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
    public class TablessesController : ControllerBase
    {
        private readonly DataContext _context;

        public TablessesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Tablesses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tabless>>> Gettables()
        {
            return await _context.tables.ToListAsync();
        }
        [Route("GetDispoTables")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tabless>>> GetTableDispo()

        {
            var tablesss = _context.tables
            .Where(c => c.etat == "Disponible")
        .ToList();

            return tablesss;
        }

        // GET: api/Tablesses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tabless>> GetTabless(int id)
        {
            var tabless = await _context.tables.FindAsync(id);

            if (tabless == null)
            {
                return NotFound();
            }

            return tabless;
        }

        // PUT: api/Tablesses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTabless(int id, Tabless tabless)
        {
            if (id != tabless.idtable)
            {
                return BadRequest();
            }

            _context.Entry(tabless).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TablessExists(id))
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

        // POST: api/Tablesses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tabless>> PostTabless(Tabless tabless)
        {
            _context.tables.Add(tabless);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTabless", new { id = tabless.idtable }, tabless);
        }

        // DELETE: api/Tablesses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTabless(int id)
        {
            var tabless = await _context.tables.FindAsync(id);
            if (tabless == null)
            {
                return NotFound();
            }

            _context.tables.Remove(tabless);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TablessExists(int id)
        {
            return _context.tables.Any(e => e.idtable == id);
        }
    }
}
