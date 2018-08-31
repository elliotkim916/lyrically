import {
  GENIUS_SONG_BASE_URL,
  GENIUS_TOKEN
  //GENIUS_OAUTH_BASE_URL,
  //GENIUS_CLIENT_ID,
  //GENIUS_OAUTH_AUTHORIZE_BASE_URL,
  //GENIUS_REDIRECT_URI,
  //GENIUS_SECRET
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

// function OAuth() {
//   window.location.href = `${GENIUS_OAUTH_BASE_URL}client_id=${GENIUS_CLIENT_ID}&redirect_uri=http://localhost:3000/&scope=me&response_type=code`;
//   let href = window.location.href.replace(/.*code=/g,'');
//   console.log(href);
// }

// function authorizeOAuth() {
//   let current_token = localStorage.getItem('genius_token');
//   console.log(current_token);
//   const headers = {
//     'Authorization': `Bearer ${GENIUS_TOKEN}`
//   }

//   const response_data = {
//     "code": current_token,
//     "client_id": `${GENIUS_CLIENT_ID}`,
//     "client_secret": `${GENIUS_SECRET}`,
//     "redirect_uri": "http://localhost:3000/",
//     "response_type": "token",
//     "grant_type": "authorization_code"
//   }

//   return fetch(`${GENIUS_OAUTH_AUTHORIZE_BASE_URL}`, {
//     headers,
//     response_data
//     }).then(res => console.log(res))
// }

function fetch_song(endpoint, token) {
  console.log(token);
  const headers = {
    'Authorization': `Bearer ${GENIUS_TOKEN}`
  }
  
  return fetch(`${GENIUS_SONG_BASE_URL}${endpoint}&${token}`, {
    headers
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => console.log(data)).then(() => localStorage.removeItem('genius_token')); 
}

export const get_song = (endpoint, token) => dispatch => {
  dispatch(songSearchRequest());
  //OAuth();
  //authorizeOAuth();
  fetch_song(endpoint, token)
  .then(song => {
    dispatch(songSearchSuccess(song))
  }).catch(error => {
    dispatch(songSearchError(error))
  });
}