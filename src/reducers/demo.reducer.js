import { DEMO_REQUESTED, DEMO_FULFILLED, DEMO_REJECTED } from "../actions";

const initState = {
  post: null,
  message: 'HELLO WORLD OF REACT',
  fetching: false,
  fetched: false,
  fetchFailed: false
};

export default function demoReducer(state = initState, action) {
  switch (action.type) {
    case DEMO_REQUESTED:
      return Object.assign({}, state, {
        fetching: true,
        fetched: false,
        fetchFailed: false,
        message: 'DEMO_REQUESTED'
      });
    case DEMO_FULFILLED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        fetchFailed: false,
        message: 'DEMO_FULFILLED',
        post: action.post
      });
    case DEMO_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        fetchFailed: true,
        message: 'DEMO_REJECTED'
      });
    default:
      return state;
  }
}
