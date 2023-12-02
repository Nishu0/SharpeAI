import { useState } from 'react'
import './App.css'
import Container from './components/Container';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Transaction from './pages/transaction';
import Data from './pages/data';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
