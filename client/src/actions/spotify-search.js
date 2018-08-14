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