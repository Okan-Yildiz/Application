using System.ComponentModel.DataAnnotations;

namespace WebApplication_Argus.Modules
{
    public class User
    {
        [Key]
        public Guid EntryNo { get; set; }

        public string Name { get; set; }
     
        public string LastName { get; set; }
    
        public string Email { get; set; }

        public DateTime BirthDate { get; set; }

        public string Education { get; set; }
 
        public string Preference { get; set; }
    }
}
