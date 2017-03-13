using MadeBySeth.Cv.Api.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MadeBySeth.Cv.Api.Service
{    
    public interface IWorkRecordService
    {
        /// <summary>
        /// Retrieve all the work records
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<WorkRecord>> GetAll();
    }
}
