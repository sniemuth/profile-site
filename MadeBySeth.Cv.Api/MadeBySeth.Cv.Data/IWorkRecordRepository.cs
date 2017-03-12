using MadeBySeth.Cv.Api.Core;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MadeBySeth.Cv.Data
{
    public interface IWorkRecordRepository
    {
        Task<IEnumerable<WorkRecord>> GetAll();
    }
}
