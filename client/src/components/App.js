import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import SearchForm from './search-form';

const spotifyWebApi = new Spotify();

class App extends Component {
  constructor() {
    super();

    const params = this.getHashParams();

    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: '',
        image: ''
      }
    }

    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }

  componentDidMount() {
    this.getNowPlaying();
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getNowPlaying() {
    spotifyWebApi.getMyCurrentPlaybackState()
      .then(res => {
        console.log(res.item.album.images[0].url);
        this.setState({
          nowPlaying: {
            name: res.item.name,
            image: res.item.album.images[0].url
          }
        });
      });
  }

  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button>Sign In With Spotify</button>
        </a>
        <div> NOW PLAYING : {this.state.nowPlaying.name} </div>
        <div> 
          <img 
              src = {this.state.nowPlaying.image} 
              alt = "Album Cover" 
              style = {{width: 300}}   
          />
        </div>
        <SearchForm/>
      </div>
    );
  }
}

export default App;
