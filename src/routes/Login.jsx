import React, { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/oauth_flows/InputForm';
import { generateCodeVerifier, generateCodeChallenge } from '../utils/pkce';
import lock from '../../public/images/lock_black.png';

function Login({ onClose }) {
  const fields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  ];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const values = { email, password };
  const setters = { setEmail, setPassword };

  const clientId = 'unilinkauth';
  const authorizationEndpoint = 'https://identity-auth-server.onrender.com/oauth2/authorize';
  const redirectUri = 'https://simpleidp.netlify.app/callback';
  const scope = 'openid email';

  const handlePKCELogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://identity-auth-server.onrender.com/api/login', {
        email: email,
        password: password,
      }, { withCredentials: true });

      const codeVerifier = generateCodeVerifier();
      localStorage.setItem('pkce_code_verifier', codeVerifier);

      const codeChallenge = await generateCodeChallenge(codeVerifier);

      const params = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: scope,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256'
      });

      window.location.href = `${authorizationEndpoint}?${params.toString()}`;
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="p-6 sm:p-10 flex flex-col items-center">
      <img src={lock} alt="Lock" className="w-20 h-20 mb-4" />

      <InputForm fields={fields} values={values} setters={setters} onSubmit={handlePKCELogin} title="Login" />
    </div>
  );
}

export default Login;
