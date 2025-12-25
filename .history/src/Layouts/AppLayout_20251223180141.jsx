import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../pages/"

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen  container'>
        <Header/>
        <Outlet/>
      </main>
    </div>
  )
}

export default AppLayout
