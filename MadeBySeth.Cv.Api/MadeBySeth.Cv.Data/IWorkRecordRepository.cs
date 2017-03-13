using MadeBySeth.Cv.Api.Core;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MadeBySeth.Cv.Data
{
    public interface IWorkRecordRepository
    {
        /// <summary>
        /// Retrieve all the work records from the repository
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<WorkRecord>> GetAll();
    }
}
