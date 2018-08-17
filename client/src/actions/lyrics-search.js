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