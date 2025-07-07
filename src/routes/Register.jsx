import React, { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/oauth_flows/InputForm';
import { generateCodeVerifier, generateCodeChallenge } from '../utils/pkce';
import lock from '../../public/images/lock_black.png';

function Register({ onClose }) {
  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const values = { name, email, password };
  const setters = { setName, setEmail, setPassword };

  const clientId = 'unilinkauth';
  const authorizationEndpoint = 'https://identity-auth-server-production.up.railway.app/oauth2/authorize';
  const redirectUri = 'https://simpleidp.netlify.app/callback';
  const scope = 'openid email';

  const handlePKCELogin = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Register user
      await axios.post('https://user-service-production-08be.up.railway.app/users', {
        name: name,
        email: email,
        password: password,
        clientId: 1
      });

      // Step 2: Login user
      await axios.post('https://identity-auth-server-production.up.railway.app/api/login', {
        email: email,
        password: password,
      }, { withCredentials: true });

      // Step 3: PKCE setup
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

      // Step 4: Redirect to authorization endpoint
      window.location.href = `${authorizationEndpoint}?${params.toString()}`;
    } catch (error) {
      console.error('Registration or Login failed', error);
      alert('Registration or login failed. Please try again.');
    }
  };

  return (
    <div className="p-6 sm:p-10 flex flex-col items-center">
      <img src={lock} alt="Lock" className="w-20 h-20 mb-4" />
      <InputForm fields={fields} values={values} setters={setters} onSubmit={handlePKCELogin} title="Register" />
    </div>
  );
}

export default Register;
