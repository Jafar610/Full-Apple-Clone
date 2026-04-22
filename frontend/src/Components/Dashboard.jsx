import React from 'react'
import Topbar from '../Pages/Dashboard/Topbar'
import Sidebar from '../Pages/Dashboard/Sidebar'
import Categories from '../Pages/Dashboard/Categories'

function Dashboard() {
  return (
    <>
        <Topbar/>
        <div className='flex'>
          <Sidebar/>
          <Categories/>
        </div>
        
    </>
  )
}

export default Dashboard