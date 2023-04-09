import { useState } from 'react'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import './App.css'


function App() {
  return ( 
    <div className='main-container'>
      <Navbar />
      <Header />
      <Main />
      <Contact />
    </div>
  
  )
 
}

export default App
