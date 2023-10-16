import React from 'react'
import  style  from "./HomePageComponents/Home.module.css"
import MyNavbar from './CommonComponents/Navbar/MyNavbar'
import Coreservice from './HomePageComponents/CoreService/Coreservice'
import HeroSection from './HomePageComponents/HeroSection/HeroSection'
import ClientServices from './HomePageComponents/ClientServices/ClientServices'
import RestroDataSpecification from './HomePageComponents/RestroDataSpecification/RestroDataSpecification'
import BusinessDetails from './HomePageComponents/BusinessDetails/BusinessDetails'
import ClientFeedback from './HomePageComponents/ClientFeedback/ClientFeedback'
import GetInTouch from './HomePageComponents/GetInTouch/GetInTouch'
import MyFooter from './CommonComponents/Footer/MyFooter'

const HomePageComponent = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <div  className={`${style.HomePageSec}`}>
      <ClientServices/>
      <Coreservice />
      </div>
      <RestroDataSpecification/>
      <div  className={`${style.HomePageSec}`}>
      <BusinessDetails/>
      <ClientFeedback/>
      <GetInTouch/>
      <MyFooter/>
      </div>
    </>
  )
}

export default HomePageComponent
