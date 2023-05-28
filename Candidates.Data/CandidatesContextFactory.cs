using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Candidates.Data
{
    public class CandidatesContextFactory : IDesignTimeDbContextFactory<CandidatesDbContext>
    {
        public CandidatesDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}Candidates.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidatesDbContext(config.GetConnectionString("ConStr"));
        }
    }
}