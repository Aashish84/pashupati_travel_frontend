import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './css/App.css';

import ProtectedRoute from './utils/ProtectedRoute';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Admin from './pages/admin/Admin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminFeaturedDestinations from './pages/admin/AdminFeaturedDestinations';
import AdminBanner from './pages/admin/AdminBanner';

function App() {

  const [role , setRole] = useState("");

  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />

          <Route element={<ProtectedRoute role={role} />}>
            <Route path="/admin" element={<Admin />} >
              <Route path='dashboard' element={<AdminDashboard />}/>
              <Route path='featured' element={<AdminFeaturedDestinations />} />
              <Route path='banner' element={<AdminBanner />} />
              <Route path="/admin/*" element={<h1>404 Page Not found in admin side</h1>} />
            </Route>
          </Route>

          <Route path="/login" element={<Login setRole={setRole} />} />
          <Route path="*" element={<h1>404 Page Not found</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
