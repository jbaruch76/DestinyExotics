import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_EXOTICS = 'GET_EXOTICS';

/**
 * INITIAL STATE
 */
const defaultExotics = []

/**
 * ACTION CREATORS
 */
const getExotics = exotics => ({type: GET_EXOTICS, exotics});

/**
 * THUNK CREATORS
 */
export const fetchExotics = () =>
  dispatch =>
    axios.get('/api/exotics')
      .then(res =>
        dispatch(getExotics(res.data || {})))
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultExotics, action) {
  switch (action.type) {
    case GET_EXOTICS:
      return action.exotics;
    default:
      return state;
  }
}
