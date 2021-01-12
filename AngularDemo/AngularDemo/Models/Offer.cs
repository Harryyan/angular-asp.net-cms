using System;

namespace AngularDemo.Models
{
    public class Offer
    {
        public int Id { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
		public bool IsRespawningOffer { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public DateTime? RespawnStartTime { get; set; }
    }
}
