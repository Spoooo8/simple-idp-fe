import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import RootLayout from './components/general/RootLayout.jsx';
import OAuth from './components/oauth_flows/Oauth.jsx';
import Learn from './components/oauth_flows/Learn.jsx';
import pkceLearn from './data/oauth_flows/pkceLearn.js';
import clientLearn from './data/oauth_flows/clientLearn.js';
import codeLearn from './data/oauth_flows/codeLearn.js';
import AddUser from './routes/AddUser.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import CreateClient from './routes/CreateClient.jsx';
import menuItems from './data/oauth_flows/menuItems.js';

import { OAuthFlowProvider } from './components/oauth_flows/OAuthFlowContext.jsx'; // ✅ NEW
import User from './routes/User.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <App />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
        ],
      },
      {
        path: 'oauth',
        children: [
          {
            path: '',
            element: <OAuth menuItems={menuItems} />,
            children: [
              { path: 'createclient', element: <CreateClient /> },
              {
                path: 'pkce',
                children: [
                  { path: 'createclient', element: <CreateClient flow="pkce" /> },
                  { path: 'learn', element: (<Learn title="Setting Up PKCE" content={pkceLearn} />), },
                  { path: "user", element: <User /> },
                  { path: 'addUser', element: <AddUser /> },
                ],
              },
              {
                path: 'code',
                children: [
                  { path: 'createclient', element: <CreateClient flow="code" /> },
                  { path: 'learn', element: (<Learn title="Setting Up Authorization Code" content={codeLearn} />), },
                  { path: "user", element: <User /> },
                  { path: 'addUser', element: <AddUser /> },
                ],
              },
              {
                path: 'client',
                children: [
                  { path: 'createclient', element: <CreateClient flow="client" /> },
                  { path: 'learn', element: (<Learn title="Setting Up Client Credentials" content={clientLearn} />), },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OAuthFlowProvider>
      <RouterProvider router={router} />
    </OAuthFlowProvider>
  </StrictMode>
);
