
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import {Button} from "./components/ui/button.jsx"
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout.jsx"
import LandingPage from './pages/LandingPage'

import OnBoarding from './pages/OnBoarding'
import JobListing from './pages/JobListing'
import SavedJob from './pages/saved-job'
import 
const router=createBrowserRouter([


  {element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      
      {
        path:'/Onboarding',
        element:<OnBoarding/>
      },
      {
        path:'/jobs',
        element:<JobListing/>
      },
      {
        path:'/job/:id',
        element:<Jobpage/>
      },
      {
        path:'/post-job',
        element:<PostJob/>
      },
      {
        path:'/saved-job',
        element:<SavedJob/>
      },
      {
        path:'/my-job',
        element:<MyJobs/>
      }
    ]

  }
]
)

function App() {
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
