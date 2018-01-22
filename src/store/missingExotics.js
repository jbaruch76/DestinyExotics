import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_MISSING_EXOTICS = 'GET_MISSING_EXOTICS';

/**
 * INITIAL STATE
 */
const defaultMissingExotics = []

/**
 * ACTION CREATORS
 */
const getMissingExotics = exotics => ({type: GET_MISSING_EXOTICS, exotics});

/**
 * THUNK CREATORS
 */
export const fetchMissingExotics = () =>
  dispatch =>
    axios.get('/auth')
      .then(res => {
        console.log('resdata', JSON.parse(res.data['622587395']))
        dispatch(getMissingExotics(res.data || []))
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultMissingExotics, action) {
  switch (action.type) {
    case GET_MISSING_EXOTICS:
      return action.exotics;
    default:
      return state;
  }
}
