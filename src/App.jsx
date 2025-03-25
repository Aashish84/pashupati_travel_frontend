import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './css/App.css'

import ProtectedRoute from './utils/ProtectedRoute';
import Header from './components/Header';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {

  const [role , setRole] = useState("");

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />}/>

        <Route element={<ProtectedRoute role={role} />}>
          <Route path="/admin" element={<h1>this is admin</h1>}/>
        </Route>

        <Route path="/login" element={<Login setRole={setRole}/>} />
      </Routes>
    </>
  )
}

export default App
