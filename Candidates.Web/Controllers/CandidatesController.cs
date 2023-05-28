using Candidates.Data;
using Candidates.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Candidates.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private string _connectionString;
        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("GetPending")]
        [HttpGet]
        public List<Candidate> GetPending()
        {
            var repo = new Repository(_connectionString);
            return repo.GetPending();
        }
        [Route("GetConfirmed")]
        [HttpGet]
        public List<Candidate> GetConfirmed()
        {
            var repo = new Repository(_connectionString);
            return repo.GetConfirmed();
        }
        [Route("GetRefused")]
        [HttpGet]
        public List<Candidate> GetRefused()
        {
            var repo = new Repository(_connectionString);
            return repo.GetRefused();
        }
        [Route("Add")]
        [HttpPost]
        public void Add(Candidate c)
        {
            var repo = new Repository(_connectionString);
            repo.Add(c);
        }
        [Route("GetById")]
        [HttpGet]
        public Candidate GetById(int id)
        {
            var repo = new Repository(_connectionString);
            return repo.GetById(id);
        }
        [Route("UpdateStatus")]
        [HttpPost]
        public Candidate UpdateStatus(UpdateModel um)
        {
            var repo = new Repository(_connectionString);
            return repo.UpdateStatus(um.Id, um.Status);
        }
        [Route("GetCount")]
        [HttpGet]
        public int GetCount(Status status)
        {
            var repo = new Repository(_connectionString);
            return repo.GetCount(status);
        }
    }
}
