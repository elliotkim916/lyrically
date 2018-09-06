import React from 'react';
import {connect} from 'react-redux';
//import {get_lyrics} from '../actions/lyrics-search';
import {get_song} from '../actions/song-search';
import './search-results.css';

export class SearchResults extends React.Component {
  // componentDidMount() {
  //   const genius_token = window.location.href.replace(/.*code=/g,'');
  //   //console.log(genius_token);
  // }

  // findLyrics(e, song) {
  //   e.preventDefault();
  //   this.props.dispatch(get_lyrics(song));
  // }

  findSong(e, endpoint, token) {
    e.preventDefault();
    this.props.dispatch(get_song(endpoint, token));
  }

  render() {
    // console.log(this.props.genius_search_results);
    // let spotify_results_array = this.props.spotify_search_results;
    // let spotify_search_result = '';

    let genius_results_array = this.props.genius_search_results;
    let genius_search_result = '';
    // let genius_token = window.location.href.replace(/.*access_token=/g,'').slice(0, -18);
    let genius_token = localStorage.getItem('genius_token');
    console.log(genius_token);

    genius_search_result = genius_results_array.map((result, index) => 
      // result.result.api_path
      <li key={index} className="list-item">
        <img 
          src={`${result.result.song_art_image_thumbnail_url}`}
          alt=''
          className="cover_image"
        />
        <p 
          onClick = {e => this.findSong(e, result.result.api_path, genius_token)} 
          className="song_name"
        >
        {result.result.title_with_featured}
        </p>
        <p className="song_artist">{result.result.primary_artist.name}</p>
      </li>
    );
    console.log(genius_results_array);

    // spotify_search_result = spotify_results_array.map((result, index) => 
    //   <li key={index} className="list-item">
    //     <img 
    //       src = {`${result.album.images[1].url}`}
    //       alt = ''
    //       className = "cover_image"  
    //     />
    //     <p onClick={e => this.findLyrics(e, result.name)} className="song_name">{result.name}</p>
    //   </li>
    // );

    return (
      <section className="search_results">
        <ul>
          {genius_search_result}
          {/* {spotify_search_result} */}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  // spotify_search_results: state.spotify.search_results,
  genius_search_results: state.genius.lyrics
});

export default connect(mapStateToProps)(SearchResults);