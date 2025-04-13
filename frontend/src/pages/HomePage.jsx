import React from 'react'
import Navbar from '../components/Navbar'
import StudyMaterialsPage from '../homePageComponents/All'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='text-black'>
      <Navbar />
      <StudyMaterialsPage />
      <Footer />
    </div>
  )
}

export default HomePage
