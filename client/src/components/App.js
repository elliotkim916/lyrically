import React, { Component } from 'react';
import './App.css';
//import Spotify from 'spotify-web-api-js';
import LandingPage from './landing-page';
import SearchForm from './search-form';
import SearchResults from './search-results';

// const spotifyWebApi = new Spotify();

class App extends Component {
  // constructor() {
  //   super();

  //   const params = this.getHashParams();

  //   this.state = {
  //     loggedIn: params.access_token ? true : false,
  //     nowPlaying: {
  //       name: '',
  //       image: ''
  //     }
  //   }

  //   if (params.access_token) {
  //     //console.log(params.access_token);
  //     spotifyWebApi.setAccessToken(params.access_token);
  //   }
  // }

  // componentDidMount() {
  //   this.getNowPlaying();
  // }

  // getHashParams() {
  //   var hashParams = {};
  //   var e, r = /([^&;=]+)=?([^&;]*)/g,
  //     q = window.location.hash.substring(1);
  //   while ( e = r.exec(q)) {
  //     hashParams[e[1]] = decodeURIComponent(e[2]);
  //   }
  //   return hashParams;
  // }

  // getNowPlaying() {
  //   spotifyWebApi.getMyCurrentPlaybackState()
  //     .then(res => {
  //       this.setState({
  //         nowPlaying: {
  //           name: res.item.name,
  //           image: res.item.album.images[0].url
  //         }
  //       });
  //     });
  // }

  render() {
    let genius_token = window.location.href.replace(/.*access_token=/g,'').slice(0, -18);
    localStorage.setItem('genius_token', genius_token);
    console.log(genius_token);
    
    return (
      <div className="App">
        {/* <a href="http://localhost:8888">
          <button>Sign In With Spotify</button>
        </a> */}
        {/* <div> NOW PLAYING : {this.state.nowPlaying.name} </div>
        <div> 
          <img 
              src = {this.state.nowPlaying.image} 
              alt = "Album Cover" 
              style = {{width: 300}}   
          />
        </div> */}
        <LandingPage />
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

export default App;
