
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {Button} from "./components/ui/button.jsx"
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout.jsx"
import LandingPage from './pages/LandingPage'

import OnBoarding from './pages/OnBoarding'

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
        path:'/Onboarding',
        element:<OnBoarding/>
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
