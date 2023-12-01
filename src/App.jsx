import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Container from './components/Container';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
