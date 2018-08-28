import React from 'react';
import {connect} from 'react-redux';
import {get_lyrics} from '../actions/lyrics-search';
import './search-results.css';

export class SearchResults extends React.Component {
  findLyrics(e, song) {
    e.preventDefault();
    console.log('clicked');
    this.props.dispatch(get_lyrics(song));
  }

  render() {
    let spotify_results_array = this.props.spotify_search_results;
    let spotify_search_result = '';

    spotify_search_result = spotify_results_array.map((result, index) => 
      <li key={index} className="list-item">
        <img 
          src = {`${result.album.images[1].url}`}
          alt = ''
          className = "cover_image"  
        />
        <p onClick={e => this.findLyrics(e, result.name)} className="song_name">{result.name}</p>
      </li>
    );

    return (
      <section className="search_results">
        <ul>
          {spotify_search_result}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  spotify_search_results: state.spotify.search_results
});

export default connect(mapStateToProps)(SearchResults);