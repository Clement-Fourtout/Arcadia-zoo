import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Routes/ErrorPage';
import Parc from './Routes/Parc';
import Services from './Routes/Services';
import Arcadia from './Routes/Arcadia';
import Connexion from './Routes/Connexion.js';
import Admin from './components/Page/admin.js';
import Politique from './components/Page/Politique.js';
import MentionsLégales from './components/Page/MentionsLégales.js';

const router = createBrowserRouter([
  {
    path:"*",
    element:<App />, 
    errorElement:<ErrorPage/>,
  },
  {
    path:"services",
    element:<Services />,
  },
  {
    path:"habitat",
    element:<Parc />,
  },
  {
    path:"arcadia",
    element:<Arcadia />,
  },
  {
    path:"connexion",
    element:<Connexion />,
  },
  {
    path:"admin",
    element:<Admin />,
  },
  {
    path:"politique",
    element:<Politique />,
  },
  {
    path:"mentions",
    element:<MentionsLégales />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();