using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;

namespace MarsRover.Web.Models
{
    public class Photos
    {
        public long id { get; set; }
        public string img_src { get; set; }
        public string earth_date { get; set; }
        public Camera Camera { get; set; }

    }

    public class Camera
    {
        public string name { get; set; }
        public string full_name { get; set; }
    }

    public class MarsRoverPhoto
    {
        public List<Photos> Photos { get; set; }
    }
}