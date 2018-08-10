import React from 'react';
import LoginForm from './login-form';

export function LoginPage() {
  return (
    <div className = "login_page">
      <h1>Before you can use Lyrically, sign in with your Spotify account!</h1>
      <LoginForm/>
    </div>
  )
}