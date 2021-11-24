import React from 'react'

import Feed from './Components/Feed'
import Header from './Components/Header'
import RightSidebar from './Components/RightSidebar'

import '../src/index.css'

import Sidebar from './Components/Sidebar'
import Login from './Components/Login'
import { useStateValue } from './context/StateProvider'

const App = () => {
  const [{user}, dispatch ] = useStateValue();
  console.log(user);
  return (
    <>
    {
      !user ? (<Login/>) : (
        <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
       
        <Feed/>
        <RightSidebar/>

       
      
      </div>
      
    </div>

      )
    }
   
    </>
  )
}

export default App
