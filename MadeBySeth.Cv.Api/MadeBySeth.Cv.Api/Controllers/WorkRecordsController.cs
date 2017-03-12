using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MadeBySeth.Cv.Api.Core;
using MadeBySeth.Cv.Api.Service;
using Microsoft.AspNetCore.Cors;

namespace MadeBySeth.Cv.Api.Controllers
{
    [Route("api/[controller]")]
    public class WorkRecordsController : Controller
    {
        private readonly IWorkRecordService _workRecordService;

        public WorkRecordsController(IWorkRecordService workRecordService)
        {
            _workRecordService = workRecordService;
        }

        // GET api/workrecords
        [HttpGet]
        public async Task<IEnumerable<WorkRecord>> Get()
        {
            return await _workRecordService.GetAll();
        }        
    }
}
