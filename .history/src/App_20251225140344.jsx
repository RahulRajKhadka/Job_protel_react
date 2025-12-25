import './App.css'
import { ThemeProvider } from "./components/ui/theme-provider.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from "./Layouts/AppLayout.jsx"
import LandingPage from './pages/LandingPage.jsx'
import OnBoarding from './pages/OnBoarding.jsx'
import JobListing from './pages/JobListing.jsx'
import SavedJob from './pages/saved-job.jsx'
import JobPage from "./pages/JobPage.jsx"
import PostJob from './pages/postJob'
import MyJobs from './pages/MyJobs'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage /> // Public landing page
  },
  {
    element: , // Layout for protected pages
    children: [
      {
        path: '/Onboarding',
        element: (
          <ProtectedRoute>
            <OnBoarding />
          </ProtectedRoute>
        )
      },
      {
        path: '/jobs',
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        )
      },
      {
        path: '/job/:id',
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/post-job',
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        )
      },
      {
        path: '/saved-job',
        element: (
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
        )
      },
      {
        path: '/my-job',
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        )
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
