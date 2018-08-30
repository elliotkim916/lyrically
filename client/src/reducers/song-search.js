import {
  SONG_SEARCH_REQUEST,
  SONG_SEARCH_SUCCESS,
  SONG_SEARCH_ERROR
} from '../actions/song-search';

const initialState = {
  loading: false,
  song: [],
  error: null
};

export function songSearchReducer(state=initialState, action) {
  if (action.type === SONG_SEARCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === SONG_SEARCH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      song: action.song
    });
  } else if (action.type === SONG_SEARCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
};