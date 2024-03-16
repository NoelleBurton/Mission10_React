using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using MissionAPI.Models;

namespace MissionAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : Controller
    {

        readonly IBowlingLeagueRepository _bowlingLeagueRepository;

        public BowlingLeagueController(IBowlingLeagueRepository temp)
        {
            _bowlingLeagueRepository = temp;
        }

        [HttpGet("bowlers")]
        public IEnumerable<Bowler> GetBowlers()
        {
            var bowlerData = _bowlingLeagueRepository.Bowlers.ToArray();

            return bowlerData;
        }

        [HttpGet("teams")]
        public IEnumerable<Team> GetTeams()
        {
            var teamData = _bowlingLeagueRepository.Teams.ToArray();

            return teamData;
        }
    }
}
