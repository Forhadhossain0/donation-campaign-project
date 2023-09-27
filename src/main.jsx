import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,  RouterProvider,} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Donation from './components/Donation/Donation';
// import Cardhome from './components/Cardhome/Cardhome';
import Details from './components/Details/Details'
import Homedonatecard from './components/Homedonatecard/Homedonatecard';


const router = createBrowserRouter([
  {
    path : "/",
    element : <Home> </Home>,
    children : [

      {
        path : '/',
        element : <Homedonatecard> </Homedonatecard>
      },
      {
        path : '/statistics',
        element : <Statistics> </Statistics>,
        loader : () => fetch(`../public/mydata.json`) ,
      },
      {
        path : '/donation',
        element : <Donation> </Donation>,
        loader : () => fetch(`../public/mydata.json`) ,
      },
      {
        path : '/details/:id',
        element : <Details> </Details>,
        loader : () => fetch(`../public/mydata.json`) ,
        
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
