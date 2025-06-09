import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import JwtInput from './routes/jwt/JwtInput'
import  jwtData from './data/jwtData.js'
import Learn from './components/Learn';
import JwtMain from './routes/jwt/JwtMain.jsx'
import OAuthMain from './routes/oauth/OAuthMain.jsx';
import OAuthInput from './routes/oauth/OAuthInput.jsx';
import SocialMain from './routes/social/SocialMain.jsx';
import SocialInput from './routes/social/SocialInput.jsx';
import RootLayout from './components/RootLayout.jsx';
import AddUser from './routes/AddUser.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { path: "", element: <App /> },
      {
        path: "jwt",
        element: <JwtMain />,
        children: [
          { path: "form", element: <JwtInput /> },
          {
            path: "learn",
            element: (
              <Learn
                title="Setting Up JWT Authentication"
                content={jwtData}
              />
            ),
          },
        ],
      },
      {
        path: "social",
        element: <SocialMain />,
        children: [
          { path: "form", element: <SocialInput /> },
          {
            path: "learn",
            element: (
              <Learn
                title="Setting Up OAuth2 using Social login"
                content={jwtData}
              />
            ),
          },
        ],
      },
      {
        path: "oauth",
        element: <OAuthMain />,
        children: [
          { path: "form", element: <OAuthInput /> },
          {
            path: "learn",
            element: (
              <Learn title="Setting Up OAuth2" content={jwtData} />
            ),
          },
        ],
      },
      // {
      //   path:"addUser",
      //   element:<AddUser/>
      // }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

