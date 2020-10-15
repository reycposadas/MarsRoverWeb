using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using MarsRover.Web.Models;
using Newtonsoft.Json;
using System.Net;
using System.Globalization;

namespace MarsRover.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly string apiKey = "ZKNgeK764VSL22s7lKybFM8ExlOUpxcFWrSsV8Uo";
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult JsonResult( string message)
        {
            return Json(new { error = message }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult SearchImage(string date)
        {
            try
            {
                ConvertDate convertDate = GetDate(date);
                if (convertDate.IsValid)
                {
                    string apiPAram = GetParam(convertDate.Value);
                    string response = GetMethodApi(apiPAram);
                    if (!string.IsNullOrEmpty(response))
                    {
                        MarsRoverPhoto marsRoverPhoto = JsonConvert.DeserializeObject<MarsRoverPhoto>(response);
                        return View("Images", marsRoverPhoto);
                    }
                    else
                        return JsonResult(response);
                }
                else
                {
                    return JsonResult("Invalid date format");
                }
            }
            catch (Exception e)
            {
                return JsonResult(e.Message);
            }
        }

        private ConvertDate GetDate(string date)
        {
            ConvertDate convertDate = new ConvertDate();

            if(!convertDate.IsValid)
            {
                try
                {
                    date = DateTime.ParseExact(date, "MM/dd/yy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd");
                    return new ConvertDate { IsValid = true, Value = date };
                }
                catch (Exception) { }
            }
            if (!convertDate.IsValid)
            {
                try
                {
                    date = DateTime.ParseExact(date, "MMMM d, yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd");
                    return new ConvertDate { IsValid = true, Value = date };
                }
                catch (Exception) { }
            }
            if (!convertDate.IsValid)
            {
                try
                {
                    date = DateTime.ParseExact(date, "MMM-dd-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd");
                    return new ConvertDate { IsValid = true, Value = date };
                }
                catch (Exception) { }
            }
            if (!convertDate.IsValid)
            {
                try
                {
                    date = DateTime.ParseExact(date, "MMMM dd, yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd");
                    return new ConvertDate { IsValid = true, Value = date };
                }
                catch (Exception) { }
            }
            return convertDate;
        }


        private string GetMethodApi(string apiUrl)
        {
            string result = null;

            try
            {
                using (var client = new HttpClient())
                {
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                    var response = client.GetAsync(apiUrl).Result;
                    if (response.IsSuccessStatusCode)
                        result = response.Content.ReadAsStringAsync().Result;
                }
            }
            catch (Exception ex) {
                result = ex.Message;
            }
            return result;
        }

        private string GetParam(string date)
        {
            return $"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key={apiKey}&earth_date={date}";
        }
    }
   
}