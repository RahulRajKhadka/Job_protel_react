import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen  container'>
        <Header/>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AppLayout
