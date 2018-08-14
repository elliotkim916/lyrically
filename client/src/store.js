import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {spotifySearchReducer} from './reducers/spotify-search';

const store = createStore(
  spotifySearchReducer, 
  applyMiddleware(thunk)
);

export default store;