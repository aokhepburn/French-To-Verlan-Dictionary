import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Root from './routes/Root.jsx'
import VerlanList from './routes/VerlanList.jsx'
import Home from './routes/Home.jsx'
import CreateAnExample from './routes/CreateAnExample.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:
      [
        {
          path: 'verlanlist',
          element: <VerlanList />,
          loader: async () => fetch("http://localhost:3000/verlanObject").then(response => response.json())
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'createexample',
          element: <CreateAnExample />,
          loader: async () => fetch("http://localhost:3000/verlanExemple").then(response => response.json())
        }]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
