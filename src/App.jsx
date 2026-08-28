import { useState } from 'react'
import './App.css';
import Four from './component/Four';
import Two from './component/Two';
import Three from './component/Three';
import Nav from './component/Nav';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav/>
  <Routes>
        <Route path="/" element={ <Two/>} />
        <Route path="/three" element={<Three/>} />
        <Route path="/four" element={<Four/>} />
    </Routes>
    </>
  )
}

export default App;
