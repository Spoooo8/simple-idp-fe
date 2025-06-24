import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import RootLayout from './components/general/RootLayout.jsx';
import OAuth from './components/oauth_flows/OAuth.jsx';
import Learn from './components/oauth_flows/Learn.jsx';
import clientLearn from './data/oauth_flows/clientLearn.js';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import CreateClient from './routes/CreateClient.jsx';
import ClientView from './routes/ClientView.jsx';
import { OAuthFlowProvider } from './components/oauth_flows/OAuthFlowContext.jsx';
import User from './routes/User.jsx';
import AddUser from './routes/AddUser.jsx'
import Callback from './utils/CallBack.jsx';
import axios from 'axios';
import Role from './routes/Role.jsx';
import AddRole from './routes/AddRole.jsx';
axios.defaults.withCredentials = true; // ✅ Import your callback

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />, // ✅ Home page
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
        ],

      },
      { path: 'callback', element: <Callback /> },
      {
        element: <OAuth />, children: [
          { path: 'oauth/createclient', element: <CreateClient /> },
          { path: 'oauth/pkce/createclient', element: <CreateClient flow="pkce" /> },
          { path: 'oauth/code/createclient', element: <CreateClient flow="code" /> },
          { path: 'oauth/client/createclient', element: <CreateClient flow="client" /> },]
      }
      ,
      {
  path: '/oauth/client/:clientId/dashboard',
  element: <OAuth />,
  children: [
    { path: '', element: <ClientView /> },
    { 
      path: 'user', 
      element: <User />,
      children: [
        { path: 'addUser', element: <AddUser /> } // ✅ remove the starting slash
      ]
    },
    { path: 'role', element: <Role /> ,
      children: [
        { path: 'addRole', element: <AddRole /> } // ✅ remove the starting slash
      ]
    },
    { path: 'learn', element: (<Learn title="Setting Up Client Credentials" content={clientLearn} />) }
  ]
}


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
