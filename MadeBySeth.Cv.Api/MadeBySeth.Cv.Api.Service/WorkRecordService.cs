using System;
using System.Collections.Generic;
using MadeBySeth.Cv.Api.Core;
using MadeBySeth.Cv.Data;
using System.Threading.Tasks;

namespace MadeBySeth.Cv.Api.Service
{
    /// <summary>
    /// Service for the work records
    /// </summary>
    public class WorkRecordService : IWorkRecordService
    {
        private readonly IWorkRecordRepository _workRecordRepository;

        public WorkRecordService(IWorkRecordRepository workRecordRepository)
        {
            _workRecordRepository = workRecordRepository;
        }

        public async Task<IEnumerable<WorkRecord>> GetAll()
        {
            return await _workRecordRepository.GetAll();
        }
    }
}
