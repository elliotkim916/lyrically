import {
  SPOTIFY_SEARCH_URL,
  TOKEN
} from '../config';

export const SPOTIFY_SEARCH_REQUEST = 'SPOTIFY_SEARCH_REQUEST';
export const spotifySearchRequest = () => ({
  type:  SPOTIFY_SEARCH_REQUEST
});

export const SPOTIFY_SEARCH_SUCCESS = 'SPOTIFY_SEARCH_SUCCESS';
export const spotifySearchSuccess = search_results => ({
  type: SPOTIFY_SEARCH_SUCCESS,
  search_results
});

export const SPOTIFY_SEARCH_ERROR = 'SPOTIFY_SEARCH_ERROR';
export const spotifySearchError = error => ({
  type: SPOTIFY_SEARCH_ERROR,
  error
});

function fetch_artist(artist) {
  return fetch(`${SPOTIFY_SEARCH_URL}/?q=${artist}&type=track`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(data => data.tracks.items);
}

export const search_artist = artist => dispatch => {
  dispatch(spotifySearchRequest());
  fetch_artist(artist)
  .then(artist => {
    dispatch(spotifySearchSuccess(artist));
  }).catch(error => {
    dispatch(spotifySearchError(error));
  });
}