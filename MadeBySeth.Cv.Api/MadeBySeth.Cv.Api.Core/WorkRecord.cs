using System;
using System.Collections.Generic;

namespace MadeBySeth.Cv.Api.Core
{
    /// <summary>
    /// Work record/work experience and everything associated with them
    /// </summary>
    public class WorkRecord
    {
        public int Id { get; set; }
        public string Company { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public IEnumerable<string> Technologies { get; set; }
        public string Summary { get; set; }
        public IEnumerable<string> KeyAchievements { get; set; }
    }
}
