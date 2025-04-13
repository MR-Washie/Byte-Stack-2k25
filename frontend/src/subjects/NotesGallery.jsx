import React from 'react'
import Navbar from '../components/Navbar'
import Math from './Math'
import Physics from '../subjects/Physics'
import Footer from '../components/Footer'

const NotesGallery = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-wrap'>
            <Math />
            <Physics />
            <Math />
            <Physics />
            <Math />
            <Physics />
            <Math />
            <Physics />
            <Math />
            <Physics />
            <Math />
            <Physics />
            <Math />
            <Physics />
            <Math />
            <Physics />
        </div>



        <Footer />
    </div>
  )
}

export default NotesGallery