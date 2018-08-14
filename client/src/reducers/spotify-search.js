import { 
  SPOTIFY_SEARCH_REQUEST,
  SPOTIFY_SEARCH_SUCCESS,
  SPOTIFY_SEARCH_ERROR
} from '../actions/spotify-search';

const initialState = {
  loading: false,
  search_results: [],
  error: null
}

export function spotifySearchReducer(state=initialState, action) {
  if (action.type === SPOTIFY_SEARCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === SPOTIFY_SEARCH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      search_results: action.search_results
    });
  } else if (action.type === SPOTIFY_SEARCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
};