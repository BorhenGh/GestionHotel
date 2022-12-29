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
    public class QuestionresponsesController : ControllerBase
    {
        private readonly DataContext _context;

        public QuestionresponsesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Questionresponses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Questionresponse>>> GetQuestionresponse()
        {
            return await _context.Questionresponse.ToListAsync();
        }

        // GET: api/Questionresponses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Questionresponse>> GetQuestionresponse(int id)
        {
            var questionresponse = await _context.Questionresponse.FindAsync(id);

            if (questionresponse == null)
            {
                return NotFound();
            }

            return questionresponse;
        }

        // PUT: api/Questionresponses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestionresponse(int id, Questionresponse questionresponse)
        {
            if (id != questionresponse.idquestion)
            {
                return BadRequest();
            }

            _context.Entry(questionresponse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionresponseExists(id))
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

        // POST: api/Questionresponses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Questionresponse>> PostQuestionresponse(Questionresponse questionresponse)
        {
            _context.Questionresponse.Add(questionresponse);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestionresponse", new { id = questionresponse.idquestion }, questionresponse);
        }

        // DELETE: api/Questionresponses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestionresponse(int id)
        {
            var questionresponse = await _context.Questionresponse.FindAsync(id);
            if (questionresponse == null)
            {
                return NotFound();
            }

            _context.Questionresponse.Remove(questionresponse);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuestionresponseExists(int id)
        {
            return _context.Questionresponse.Any(e => e.idquestion == id);
        }
    }
}
