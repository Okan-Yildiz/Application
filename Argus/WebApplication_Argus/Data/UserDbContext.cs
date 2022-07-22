using Microsoft.EntityFrameworkCore;
using WebApplication_Argus.Modules;

namespace WebApplication_Argus.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<User> Users { get; set; }



    }
}
