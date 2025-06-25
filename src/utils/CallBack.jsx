import { useEffect } from 'react';
import axios from 'axios';

function Callback() {

  useEffect(() => {
      console.log('Callback.jsx mounted');
      async function exchangeToken() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      console.log('Authorization Code:', code); // Confirm code is present

      if (!code) {
        console.error('Authorization code not found in URL');
        return;
      }

      const codeVerifier = localStorage.getItem('pkce_code_verifier');

      if (!codeVerifier) {
        console.error('PKCE Code Verifier not found in localStorage');
        return;
      }

      const tokenUrl = 'http://localhost:9000/oauth2/token';

      const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'https://simpleidp.netlify.app/callback',
        client_id: 'unilinkauth',
        code_verifier: codeVerifier
      });

      try {
        console.log('Sending token request...');
        const response = await axios.post(tokenUrl, data, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true
        });

        console.log('Full Token Response:', response.data);

        const accessToken = response.data.access_token;
        if (accessToken) {
          sessionStorage.setItem('access_token', accessToken);
          console.log('Token stored successfully:', accessToken);

          window.location.href = '/';
        } else {
          console.error('No access_token in response:', response.data);
        }
      } catch (error) {
        console.error('Token exchange failed', error.response || error);
      }
    }

    exchangeToken();
  }, []);

  return (
    <div className="p-10 text-center">
      <h2>Processing login...</h2>
    </div>
  );
}

export default Callback;
