import axios from 'axios'
import { bindActionCreators } from 'redux'

/**
 * ACTION TYPES
 */
const GET_STATS = 'GET_STATS'

/**
 * INITIAL STATE
 */
const initialState = {
  awayScore: [],
  homeScore: [],
  homeTeam: '',
  awayTeam: '',
  homeErrors: 0,
  awayErrors: 0,
  homeRuns: 0,
  awayRuns: 0,
  homeHits: 0,
  awayHits: 0,
}

/**
 * ACTION CREATORS
 */
const getStats = stats => ({type: GET_STATS, stats})

/**
 * THUNK CREATORS
 */
export const fetchStats = () => async dispatch => {
  try {
    const res = await axios.get('https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json');
    console.log(res.data);
    dispatch(getStats(res.data || initialState))
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
    case GET_STATS:
      return {...state, homeScore: action.stats.home_period_scores, awayScore: action.stats.away_period_scores, homeTeam: action.stats.home_team.abbreviation, awayTeam: action.stats.away_team.abbreviation, homeErrors: action.stats.home_errors, awayErrors: action.stats.away_errors, homeRuns: sum(action.stats.home_period_scores), awayRuns: sum(action.stats.away_period_scores), homeHits: sumHits(action.stats.home_batters), awayHits: sumHits(action.stats.away_batters)}
    default:
      return state
  }
}
