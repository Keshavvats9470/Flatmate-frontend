import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from './components/Navbar';
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import UserProfile from './components/UserProfile';
import NeedRoommate from './components/NeedRoommate';
import FindRoomsPage from './pages/FindRoomsPage';
import RoommateDetailsPage from './pages/RoommateDetailsPage';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login-user" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/register-user" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/need-roommate" element={<NeedRoommate />} />

        <Route path='/listings/roommates' element={<FindRoomsPage />} />
        <Route path='/listings/roommates-details-contact-me' element={<RoommateDetailsPage />} />

      </Routes>
    </div>
  );
}

export default App;
