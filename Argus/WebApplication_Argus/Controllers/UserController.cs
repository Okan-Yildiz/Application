using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication_Argus.Data;
using WebApplication_Argus.Modules;

namespace WebApplication_Argus.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly UserDbContext userDbContext;
        public UserController(UserDbContext userDbContext)
        {
            this.userDbContext = userDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await userDbContext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpGet]
        [Route("{entryno:guid}")]
        [ActionName("GetUser")]
        public async Task<IActionResult> GetUser([FromRoute] Guid entryno)
        {
            var user = await userDbContext.Users.FirstOrDefaultAsync(x=> x.EntryNo==entryno);
            return Ok(user);
        }


        [HttpPost]

        public async Task<IActionResult> AddUsers([FromBody] User user)
        {
            user.EntryNo = Guid.NewGuid();
            await userDbContext.Users.AddAsync(user);
            await userDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUser), new {entryno = user.EntryNo}, user);
        }




    }
}
