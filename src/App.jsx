import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './css/App.css'

import ProtectedRoute from './utils/ProtectedRoute';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Admin from './pages/admin/Admin';

function App() {

  const [role , setRole] = useState("");

  return (
    <>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/home" element={<Home />}/>

        <Route element={<ProtectedRoute role={role} />}>
          <Route path="/admin" element={<Admin />}/>
        </Route>

        <Route path="/login" element={<Login setRole={setRole}/>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      </div>
    </>
  )
}

export default App
