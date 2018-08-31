import {
  GENIUS_SONG_BASE_URL,
  GENIUS_TOKEN,
  GENIUS_OAUTH_BASE_URL,
  GENIUS_CLIENT_ID,
  GENIUS_REDIRECT_URI
} from '../config';

let href;

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

function OAuth() {
  window.location.href = `${GENIUS_OAUTH_BASE_URL}client_id=${GENIUS_CLIENT_ID}&redirect_uri=http://localhost:3000/&scope=me&response_type=code`;
  href = window.location.href.replace(/.*code=/g,'');
  console.log(href);
}

function fetch_song(song_endpoint) {
  const headers = {
    'Authorization': `Bearer ${GENIUS_TOKEN}`
  }
  
  return fetch(`${GENIUS_SONG_BASE_URL}${song_endpoint}`, {
    headers
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => console.log(data)); 
}

export const get_song = song => dispatch => {
  dispatch(songSearchRequest());
  OAuth();
  fetch_song(song)
  .then(song => {
    dispatch(songSearchSuccess(song))
  }).catch(error => {
    dispatch(songSearchError(error))
  });
}