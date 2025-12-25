import Header from "../components/ui/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid-background"></div>

      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <Header />
        <Outlet />
      </main>

      <footer className="w-full bg-gray-800 py-8 text-center text-sm text-gray-300">
      </footer>
    </div>
  )
}

export default AppLayout
