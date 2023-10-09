import React from 'react'
import Navbar from './CommonComponents/Navbar/Navbar'
import Coreservice from './HomePageComponents/CoreService/Coreservice'
import HeroSection from './HomePageComponents/HeroSection/HeroSection'

const HomePageComponent = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Coreservice />
    </>
  )
}

export default HomePageComponent
