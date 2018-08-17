import {
  LYRICS_SEARCH_REQUEST,
  LYRICS_SEARCH_SUCCESS,
  LYRICS_SEARCH_ERROR
} from '../actions/lyrics-search';

const initialState = {
  loading: false,
  lyrics: [],
  error: null
};

export function lyricSearchReducer(state=initialState, action) {
  if (action.type === LYRICS_SEARCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === LYRICS_SEARCH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      lyrics: action.lyrics
    });
  } else if (action.type === LYRICS_SEARCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
};