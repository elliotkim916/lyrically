import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {spotifySearchReducer} from './reducers/spotify-search';
import {lyricsSearchReducer} from './reducers/lyrics-search';

const store = createStore(
  combineReducers({
    spotify: spotifySearchReducer, 
    genius: lyricsSearchReducer
  }),  
  applyMiddleware(thunk)
);

export default store;