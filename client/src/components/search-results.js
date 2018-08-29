import React from 'react';
import {connect} from 'react-redux';
import {get_lyrics} from '../actions/lyrics-search';
import './search-results.css';

export class SearchResults extends React.Component {
  findLyrics(e, song) {
    e.preventDefault();
    this.props.dispatch(get_lyrics(song));
  }

  render() {
    // console.log(this.props.genius_search_results);
    // let spotify_results_array = this.props.spotify_search_results;
    // let spotify_search_result = '';
    let genius_results_array = this.props.genius_search_results;
    let genius_search_result = '';

    genius_search_result = genius_results_array.map((result, index) => 
      //console.log(result.result)
      <li key={index} className="list-item">
        <img 
          src={`${result.result.song_art_image_thumbnail_url}`}
          alt=''
          className="cover_image"
        />
        <p className="song_name">{result.result.title_with_featured}</p>
        <p className="song_artist">{result.result.primary_artist.name}</p>
      </li>
    );

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
  spotify_search_results: state.spotify.search_results,
  genius_search_results: state.genius.lyrics
});

export default connect(mapStateToProps)(SearchResults);