import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SCORES: string = 'GET_SCORES';

/**
 * INITIAL STATE
 */

interface scoreState {
  allTransactions: Array<object>,
  singleTransaction: object,
}
const initialState: scoreState = {
  allTransactions: [],
  singleTransaction: {}
}

/**
 * ACTION CREATORS
 */
const getScores = (scores: object) => ({type: GET_SCORES, scores})

/**
 * THUNK CREATORS
 */
export const fetchTransactions = () => async dispatch => {
  try {
    const res = await axios.post('/api/plaid/transactions/get', {
      client_id: process.env.PLAID_CLIENT_ID,
      secret: process.env.PLAID_SECRET,
      access_token: process.env.PLAID_ACCESS_TOKEN,
      start_date: '2017-01-01',
      end_date: '2018-01-01',
      options: {
        count: 250,
        offset: 100
      }
    })
    let transactions = res.data.transactions
    dispatch(getTransactions ((transactions: object) || (initialState: object))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action: object) {
  switch (action.type) {
    case GET_SCORES:
      return {...state, allTransactions: action.transactions}
    default:
      return state
  }
}
