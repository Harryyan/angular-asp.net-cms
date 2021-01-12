using AngularDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

namespace AngularDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferController : ControllerBase
    {
        private static List<Offer> _offers;
        private readonly ILogger<OfferController> _logger;

        public OfferController(ILogger<OfferController> logger)
        {
            _logger = logger;

            if (_offers == null)
            {                
                InitOffers();
            }
        }

        private void InitOffers()
        {
            string fileName = @"Data\offers.json";
            var jsonData = System.IO.File.ReadAllText(fileName);
            _offers = JsonSerializer.Deserialize<List<Offer>>(jsonData, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }

        [HttpGet]
        public IEnumerable<Offer> Get()
        {
            return _offers.OrderBy(x => x.StartDateTime);
        }

        [HttpPost]
        public IActionResult Post(Offer offer)
        {
            var largestId = _offers.Max(offer => offer.Id);
            offer.Id = largestId + 1;
            _offers.Add(offer);
            return Ok();
        }
    }
}
