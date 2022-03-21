import React from 'react'
import './App.css'
import { user } from './utils/User'
import { company } from './utils/Company'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    console.log(company);
    console.log(user);
  })
  
  return (
    <div className="app">
    
    </div>
  )
}

export default App
