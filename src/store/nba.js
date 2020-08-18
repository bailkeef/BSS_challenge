import axios from 'axios'
import { bindActionCreators } from 'redux'

/**
 * ACTION TYPES
 */
const GET_NBA_STATS = 'GET_NBA_STATS'

/**
 * INITIAL STATE
 */
const initialState = {

}

/**
 * ACTION CREATORS
 */
const getNBAStats = stats => ({type: GET_NBA_STATS, stats})

/**
 * THUNK CREATORS
 */
export const fetchStats = () => async dispatch => {
  try {
    const res = await axios.get('https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json');
    dispatch(getNBAStats(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

// HELPERS
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function sumHits(arr) {
  let totalHits = 0;
  for (let i = 0; i < arr.length; i++) {
    totalHits += arr[i].hits;
  }
  return totalHits;
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NBA_STATS:
      return {...state, homeScore: action.stats.home_period_scores, awayScore: action.stats.away_period_scores, homeTeam: action.stats.home_team.abbreviation, awayTeam: action.stats.away_team.abbreviation, awayFirstName: action.stats.away_team.first_name, homeFirstName: action.stats.home_team.first_name, awayLastName: action.stats.away_team.last_name, homeLastName: action.stats.home_team.last_name, homePlayers: action.stats.home_stats,awayPlayers: action.stats.away_stats, status: action.stats.event_information.status, homeTotal: sum(action.stats.home_period_scores), awayTotal: sum(action.stats.away_period_scores), awayStats: action.stats.away_totals, homeStats: action.stats.home_totals }
    default:
      return state
  }
}
