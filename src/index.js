import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './pages/About'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Items from './pages/Items';
import ItemPage from './pages/ItemPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/About',
        element: <About />
    },
    {
        path: '/Items',
        element: <Items />,
        children:[
            {
                path: '/Items/:itemid',
                element: <ItemPage />
            }
        ]
    },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />
 
);


