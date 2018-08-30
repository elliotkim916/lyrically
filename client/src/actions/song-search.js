import {
  GENIUS_SONG_BASE_URL
} from '../config';

export const SONG_SEARCH_REQUEST = 'SONG_SEARCH_REQUEST';
export const songSearchRequest = () => ({
  type: SONG_SEARCH_REQUEST
});

export const SONG_SEARCH_SUCCESS = 'SONG_SEARCH_SUCCESS';
export const songSearchSuccess = song => ({
  type: SONG_SEARCH_SUCCESS,
  song
});

export const SONG_SEARCH_ERROR = 'SONG_SEARCH_ERROR';
export const songSearchError = error => ({
  type: SONG_SEARCH_ERROR,
  error
});

function fetchSong(song_endpoint) {
  return fetch(`${GENIUS_SONG_BASE_URL}${song_endpoint}`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => console.log(data)); 
}

export const getSong = song => dispatch => {
  dispatch(songSearchRequest());
  fetchSong(song)
  .then(song => {
    dispatch(songSearchSuccess(song))
  }).catch(error => {
    dispatch(songSearchError(error))
  });
}