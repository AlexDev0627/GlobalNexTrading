import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Hero from "./components/Hero.jsx";
import Cta from "./components/Cta.jsx";
import Partners from "./components/Partners.jsx";
import Features from "./components/Feature.jsx";
import Stats from "./components/Stats.jsx";
import Footer from "./components/Footer.jsx";
import Marquee from "./components/Marquee.jsx"

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Partners />
            <Cta />
            <Features />
            <Marquee />
            <Stats />
            <Footer />
        </>
    )
}

export default App;
