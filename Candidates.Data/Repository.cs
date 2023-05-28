using Microsoft.EntityFrameworkCore;

namespace Candidates.Data
{
    public class Repository
    {
        private string _connectionString;
        public Repository(string conStr)
        {
            _connectionString = conStr;
        }
        public int GetCount(Status status)
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Count(c => c.Status == status);
        }
        public List<Candidate> GetPending()
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }
        public List<Candidate> GetConfirmed()
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }
        public List<Candidate> GetRefused()
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Refused).ToList();
        }
        public void Add(Candidate c)
        {
            using var context = new CandidatesDbContext(_connectionString);
            context.Candidates.Add(c);
            context.SaveChanges();
        }
        public Candidate GetById(int id)
        {
            using var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public Candidate UpdateStatus(int id, Status status)
        {
            using var context = new CandidatesDbContext(_connectionString);
            var candidate = context.Candidates.FirstOrDefault(c => c.Id == id);
            candidate.Status = status;
            context.SaveChanges();
            return candidate;
        }
    }
}