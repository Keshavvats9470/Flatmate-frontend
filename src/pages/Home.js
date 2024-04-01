import React from 'react';
import Hero from "../components/Hero";
import About from '../components/About';
import MainAbout from '../components/MainAbout';
import HeroMain from '../components/HeroMain';
import CityViewAbout from '../components/CityViewAbout';

function Home({ isLoggedIn }) {
    return (
        <div>
            <Hero />
            <About />
            <MainAbout />
            <HeroMain />
            <CityViewAbout />
        </div>
    )
}

export default Home;
