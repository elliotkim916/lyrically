import React from 'react';
import './landing-page.css';
import {
  GENIUS_OAUTH_BASE_URL,
  GENIUS_CLIENT_ID
  // GENIUS_OAUTH_AUTHORIZE_BASE_URL,
  // GENIUS_SECRET
} from '../config';

export default class LandingPage extends React.Component {
  OAuth() {
    localStorage.removeItem('genius_token');
    window.location.href = `${GENIUS_OAUTH_BASE_URL}client_id=${GENIUS_CLIENT_ID}&redirect_uri=http://localhost:3000/&scope=me&response_type=code`;
  }

  render() {
    return (
      <button onClick = {() => this.OAuth()}>Authenticate</button>
    );
  }
}