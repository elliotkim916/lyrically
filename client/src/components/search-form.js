import React from 'react';
import './search-form.css';
//import {search_artist} from '../actions/spotify-search';
import {get_lyrics} from '../actions/lyrics-search';
import {connect} from 'react-redux';

export class SearchForm extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(get_lyrics(this.input.value.trim()));
    this.input.value = '';
  }

  render() {
    return (
      <section className="search_form_section">
        <form 
          className="search_form"
          onSubmit = {(e) => {this.onSubmit(e)}}
          >
          <input 
            type = "text" 
            name = "search for artist"
            ref = {input => this.input = input}
            placeholder = "e.g. Rihanna"
            className = "search_input"
            aria-label = "Search artist"
            required
          />
          <button
            type = "submit"
            className= "search_button"
            aria-label = "Search button"  
          >
            Search
          </button>
        </form>
      </section>
    )
  }
}

export default connect()(SearchForm);