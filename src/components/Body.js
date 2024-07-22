import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Login from './Login';
import { RouterProvider } from 'react-router-dom';
import Browse from './Browse';
// import Error from './Error';

const Body = () => {

// create Router array for path 
const appRouter = createBrowserRouter([
    // {
        // path:'/',
        // element:<Login/>,
        // children:[
            {
                path:'/',
                element:<Login/>
            },
            {
                path:'/browser',
                element:<Browse/>
            }
        // ],
        // errorElement:<Error/>
    // },
    
])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;