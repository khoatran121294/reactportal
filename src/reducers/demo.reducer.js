import { DEMO_REQUESTING, DEMO_FULFILLED, DEMO_REJECTED } from "../actions";

const initialState = {
  data: null,
  message: 'NO REQUEST',
  fetching: false,
  fetched: false,
  fetchFailed: false
};

export default function demoReducer(state = initialState, action) {
  switch (action.type) {
    case DEMO_REQUESTING:
      return Object.assign({}, state, {
        fetching: true,
        fetched: false,
        fetchFailed: false,
        message: 'REQUESTING...'
      });
    case DEMO_FULFILLED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        fetchFailed: false,
        message: 'FULFILLED',
        data: action.data
      });
    case DEMO_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        fetchFailed: true,
        message: 'REJECTED'
      });
    default:
      return state;
  }
}
