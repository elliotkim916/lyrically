import {createStore} from 'redux';
import {spotifySearchReducer} from './reducers/spotify-search';

export default createStore(spotifySearchReducer);