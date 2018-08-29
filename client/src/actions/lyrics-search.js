import {
  GENIUS_BASE_URL,
  // GENIUS_OAUTH_BASE_URL,
  GENIUS_TOKEN
  // GENIUS_CLIENT_ID,
  // GENIUS_SECRET
} from '../config';

export const LYRICS_SEARCH_REQUEST = 'LYRICS_SEARCH_REQUEST';
export const lyricsSearchRequest = () => ({
  type: LYRICS_SEARCH_REQUEST
});

export const LYRICS_SEARCH_SUCCESS = 'LYRICS_SEARCH_SUCCESS';
export const lyricsSearchSuccess = lyrics => ({
  type: LYRICS_SEARCH_SUCCESS,
  lyrics
});

export const LYRICS_SEARCH_ERROR = 'LYRICS_SEARCH_ERROR';
export const lyricsSearchError = error => ({
  type: LYRICS_SEARCH_ERROR,
  error
});

// function OAuth() {
//   return fetch(`${GENIUS_OAUTH_BASE_URL}client_id=${GENIUS_CLIENT_ID}&scope=`)
// }

function fetch_lyrics(song) {
  return fetch(`${GENIUS_BASE_URL}${song}&access_token=${GENIUS_TOKEN}`,{
    // headers: {
    //   'Authorization': `Bearer ${GENIUS_TOKEN}`
    // }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => data.response.hits); 
}

export const get_lyrics = lyrics => dispatch => {
  dispatch(lyricsSearchRequest());
  fetch_lyrics(lyrics)
  .then(lyrics => {
    dispatch(lyricsSearchSuccess(lyrics));
  }).catch(error => {
    dispatch(lyricsSearchError(error));
  });
}