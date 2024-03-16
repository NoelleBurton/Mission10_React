namespace MissionAPI.Models
{
    public class EFBowlingLeagueRepository : IBowlingLeagueRepository
    {
        private BowlingLeagueContext _bowlingLeagueContext;
        public EFBowlingLeagueRepository(BowlingLeagueContext temp)
        {
            _bowlingLeagueContext = temp;
        }
        public IEnumerable<Bowler> Bowlers => _bowlingLeagueContext.Bowlers;

        public IEnumerable<Team> Teams => _bowlingLeagueContext.Teams;
    }
}