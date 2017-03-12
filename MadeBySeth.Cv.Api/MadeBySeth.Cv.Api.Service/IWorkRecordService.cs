using MadeBySeth.Cv.Api.Core;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MadeBySeth.Cv.Api.Service
{
    public interface IWorkRecordService
    {
        Task<IEnumerable<WorkRecord>> GetAll();
    }
}
