import {
  GENIUS_SONG_BASE_URL,
  GENIUS_TOKEN,
  GENIUS_OAUTH_BASE_URL,
  GENIUS_CLIENT_ID,
  GENIUS_OAUTH_AUTHORIZE_BASE_URL,
  GENIUS_SECRET
} from '../config';

//import axios from 'axios';

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
//   window.location.href = `${GENIUS_OAUTH_BASE_URL}client_id=${GENIUS_CLIENT_ID}&redirect_uri=https://warm-journey-81614.herokuapp.com/&scope=me&response_type=code`;
//   let href = window.location.href.replace(/.*code=/g,'');
//   console.log(href);
// }

// function authorizeOAuth() {
//   let current_token = localStorage.getItem('genius_token');
//   console.log(current_token);
//   // const headers = {
//   //   'Authorization': `Bearer ${GENIUS_TOKEN}`
//   // }

//   const request_data = {
//     "code": current_token,
//     "client_id": `${GENIUS_CLIENT_ID}`,
//     "client_secret": `${GENIUS_SECRET}`,
//     "redirect_uri": "http://localhost:3000/",
//     "response_type": "token",
//     "grant_type": "authorization_code"
//   }

//   return axios.request({
//     url: 'https://api.genius.com/oauth/token', 
//     method: 'POST',
//     request_data
//     }).then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       console.log(res);
//     });
// }

function fetch_song(endpoint, token) {
  console.log(token);
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  
  return fetch(`${GENIUS_SONG_BASE_URL}${endpoint}`, {
    headers: headers,
    method: 'GET'
  }).then(res => {
    console.log(res);
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => console.log(data)); 

  // return axios.request({
  //     url: `${GENIUS_SONG_BASE_URL}${endpoint}`,
  //     method: 'GET',
  //     'Content-Type': 'application/json',
  //     headers: {
  //       'Cache-Control': 'no-cache',
  //       Authorization: `Bearer ${token}`
  //     }
  // }).then(res => {
  //   if (!res.ok) {
  //     return Promise.reject(res.statusText);
  //   }
  //   return res.json();
  // }).then(data => console.log(data)); 
}

export const get_song = (endpoint, token) => dispatch => {
  //OAuth();
  //authorizeOAuth();
  dispatch(songSearchRequest());
  fetch_song(endpoint, token)
  .then(song => {
    dispatch(songSearchSuccess(song))
  }).catch(error => {
    dispatch(songSearchError(error))
  });
}