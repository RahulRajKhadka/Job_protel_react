
import './index.css'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"


export default App
import { RouterProvider } from 'react-router-dom'
import {Button} from "./components/ui/button.jsx"
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout.jsx"
import LandingPage from './pages/LandingPage.jsx'

import OnBoarding from './pages/OnBoarding.jsx'
import JobListing from './pages/JobListing.jsx'
import SavedJob from './pages/saved-job.jsx'
import JobPage from "./pages/JobPage.jsx"
import PostJob from './pages/postJob'
import MyJobs from './pages/MyJobs'

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
        element:<JobPage/>
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
  
  )
}

export default App
