import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route>
      <Route path='/' element={<Add/>}/>
      <Route path='/v' element={<View/>}/>
      </Route>
     </Routes>
     {/* <Add/>
     <View/>
    
     */}</>
  )
}

export default App
