'use strict';

function search_song() {
  document.getElementById('submit_song').onclick = event => {
    event.preventDefault();
    console.log('clicked');
  };
}

search_song();