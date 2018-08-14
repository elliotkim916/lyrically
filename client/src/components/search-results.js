import React from 'react';
import {connect} from 'react-redux';
import './search-results.css';

export class SearchResults extends React.Component {
  render() {
    let results_array = this.props.search_results;
    let search_result = '';
    search_result = results_array.map((result, index) => 
      // console.log(result);
      <li key={index} className="list-item">
        <img 
          src = {`${result.album.images[1].url}`}
          alt = ''  
        />
        <p>{result.name}</p>
      </li>
    );

    return (
      <section className="search_results">
        <ul>
          {search_result}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  search_results: state.search_results
});

export default connect(mapStateToProps)(SearchResults);