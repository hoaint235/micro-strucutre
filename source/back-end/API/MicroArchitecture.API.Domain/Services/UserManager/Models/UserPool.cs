using System;
namespace MicroArchitecture.API.Domain.Services.UserManager.Models
{
    public class UserPool
    {
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
