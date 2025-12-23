
import './index.css'
import {Button} from "./components/ui/button.jsx"
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout.jsx"
import 

const router=createBrowserRouter([


  {element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      }
    ]

  }
]
)

function App() {
 

  return (
    <>
      <div className='bg-red-700'>Hello Nepal welcome </div>
      <Button>Login</Button>
    </>
  )
}

export default App
