import { useState } from 'react'

import './App.css'
import { Button } from 'flowbite-react'
import NavbarComponent from './components/NavbarComponent'
import HeroContent from './components/HeroContent'

function App() {

  return (
    <>
      <NavbarComponent/>
      <HeroContent/>
    </>
  )
}

export default App
