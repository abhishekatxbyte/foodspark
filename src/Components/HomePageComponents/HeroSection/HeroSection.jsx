import React from 'react'
import HeroTextSection from './components/HeroTextSection/HeroTextSection'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import style from './Hero.module.css'
const HeroSection = () => {
    return (
        <div className={style.heroSection}>
            <HeroTextSection />
            <HeroCarousel />
        </div>
    )
}

export default HeroSection