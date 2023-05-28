using Microsoft.EntityFrameworkCore;

namespace Candidates.Data
{
    public class CandidatesDbContext : DbContext
    {
        private string _connectionString;

        public CandidatesDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Candidate> Candidates { get; set; }

    }
}