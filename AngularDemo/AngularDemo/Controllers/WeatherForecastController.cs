using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularDemo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static List<WeatherForecast> _weatherForecasts;

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            if (_weatherForecasts == null)
            {
                var rng = new Random();
                _weatherForecasts = Summaries.Select(s =>
                    new WeatherForecast
                    {
                        Date = DateTime.Now.AddHours(rng.Next(0, 24 * 7)),
                        TemperatureC = rng.Next(-20, 55),
                        Summary = s
                    }
                ).ToList();
            }
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return _weatherForecasts;
        }

        [HttpPost]
        public void Post(WeatherForecast weatherForecast)
        {
            _weatherForecasts.Add(weatherForecast);
        }
    }
}
