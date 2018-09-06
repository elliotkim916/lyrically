import React from 'react';
import './landing-page.css';
import {
  GENIUS_OAUTH_BASE_URL,
  GENIUS_CLIENT_ID,
  GENIUS_SECRET,
  GENIUS_OAUTH_URL,
  GENIUS_TOKEN
} from '../config';
//import axios from 'axios';

export default class LandingPage extends React.Component {
  OAuth() {
    //localStorage.removeItem('genius_token');
    window.location.href = `${GENIUS_OAUTH_BASE_URL}client_id=${GENIUS_CLIENT_ID}&redirect_uri=http://localhost:3000/&scope=me&response_type=token`;
  }

  authorizeOAuth() {
    let current_token = localStorage.getItem('genius_token');
    console.log(current_token);
    const headers = {
      'Authorization': `Bearer ${GENIUS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  
    const params = {
      'code': `${current_token}`,
      'client_id': `${GENIUS_CLIENT_ID}`,
      'client_secret': `${GENIUS_SECRET}`,
      'redirect_uri': 'http://localhost:3000/',
      'response_type': 'token',
      'grant_type': 'authorization_code'
    }
  
    // return axios.request({
    //   url: `${GENIUS_OAUTH_URL}`, 
    //   method: 'POST',
    //   params
    //   }).then(res => {
    //    console.log(res);
    //   });

    fetch(`${GENIUS_OAUTH_URL}`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: headers
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <button onClick = {() => this.OAuth()}>Authenticate</button>
        <button onClick = {() => this.authorizeOAuth()}>AuthorizeOAuth</button>
      </div>
    );
  }
}