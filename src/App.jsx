import React, { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import MainRouter from './router/MainRouter'

function App() {
   //demos -> navbar , router-> projects,auth
  const [login, setLogin] = useState(0)
  const [admin, setAdmin] = useState(0)

  
  //real

  return (
    <div className='px-5 py-3'>
      <Navbar login={login} />
      <MainRouter login={login} admin={admin}/>

    </div>
  )
}

export default App
