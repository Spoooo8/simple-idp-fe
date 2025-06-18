import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import RootLayout from './components/general/RootLayout.jsx';
import OAuth from './components/oauth_flows/Oauth.jsx';
import PkceInput from './routes/pkce/pkceInput.jsx';
import Learn from './components/oauth_flows/Learn.jsx';
import pkceLearn from './data/oauth_flows/pkceLearn.js';
import pkceMenuItems from './data/oauth_flows/pkcemenuItems.js';
import clientLearn from './data/oauth_flows/clientLearn.js';
import clientMenuItems from './data/oauth_flows/clientMenuItems.js';
import codeLearn from './data/oauth_flows/codeLearn.js';
import codeMenuItems from './data/oauth_flows/codeMenuItems.js';
import AddUser from './routes/AddUser.jsx'
import CodeInput from './routes/code/CodeInput.jsx';
import ClientInput from './routes/client/ClientInput.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <App /> ,
        children:[
          {path:"login", element: <Login/>},
          {path:"register", element:<Register/>}
        ]
      },
      {
        path: "oauth",
        children: [
          {
            path: "pkce", element: <OAuth menuItems={pkceMenuItems} />,
            children: [
              { path: "", element: <PkceInput /> },
              { path: "learn", element: ( <Learn title="Setting Up PKCE" content={pkceLearn}/>),},
              { path: "addUser", element: <AddUser /> }
            ]
          },
          {
            path: "code", element: <OAuth menuItems={clientMenuItems} />,
            children: [
              { path: "", element: <CodeInput /> },
              { path: "learn", element: ( <Learn title="Setting Up Client Credentials" content={clientLearn}/>),},
              { path: "addUser", element: <AddUser /> }
            ]
          },
          {
            path: "client", element: <OAuth menuItems={codeMenuItems} />,
            children: [
              { path: "", element: <ClientInput /> },
              { path: "learn", element: ( <Learn title="Setting Up Authorization Code" content={codeLearn}/>),},
              { path: "addUser", element: <AddUser /> }
            ]
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
