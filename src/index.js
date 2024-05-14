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
import Savane from './components/Page/Savane';
import Jungle from './components/Page/Jungle';
import Marais from './components/Page/Marais';
import Admin from './components/Page/admin.js';

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
    path:"parc",
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
    path:"savane",
    element:<Savane />,
  },
  {
    path:"marais",
    element:<Marais />,
  },
  {
    path:"jungle",
    element:<Jungle />,
  },
  {
    path:"admin",
    element:<Admin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();