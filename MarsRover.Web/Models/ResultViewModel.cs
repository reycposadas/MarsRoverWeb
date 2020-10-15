using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;

namespace MarsRover.Web.Models
{
    public class ConvertDate
    {
       public bool IsValid { get; set; }
       public string Value { get; set; }

    }
}