import React, { useEffect } from 'react'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import SettingPage from './pages/SettingPage'
import { axiosInstance } from './lib/axios'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'
import {Toaster} from "react-hot-toast";
import NotesGallery from "./subjects/NotesGallery"
import Contact from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import {useThemeStore} from './store/useThemeStore'

const App = () => {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect (() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if(isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin' />
      </div>
    )
  }

 
  return (
    <div data-theme={theme}>
      

        <Routes>

        <Route path='/' element={ authUser? <HomePage />: <Navigate to='/login' />} />
        <Route path='/signup' element={!authUser? <SignUpPage />: <Navigate to='/' /> } />
        <Route path='/login' element={!authUser? <LoginPage />: <Navigate to='/' />} />
        <Route path='/profile' element={ authUser? <ProfilePage />: <Navigate to='/login' /> } />
        <Route path='/setting' element={authUser ? <SettingPage />: <Navigate to="/login" /> } />
        <Route path='/detail' element={authUser? <DetailPage />: <Navigate to='/login' />} />
        <Route path='/notes' element={authUser? <NotesGallery />: <Navigate to="/login" /> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutPage />} />


      
      </Routes>

      <Toaster />
      
    </div>
  )
}

export default App
