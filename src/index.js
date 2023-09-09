import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './About_us';
import { Contect } from './Contect';
import { Explore } from './Explore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let routs = createBrowserRouter([
  {
    path: '/',
    element :   <App />
  },
  {
    path: 'about-us',
    element : <About/>
  },
  {
    path: 'contect',
    element : <Contect/>
  },
  {
    path: 'Explore',
    element : <Explore/>
  }
])

root.render(
  <React.StrictMode>
    <div className='container-fluid p-0'>
        <RouterProvider router={routs} />
    </div>
  </React.StrictMode>
);

reportWebVitals();
