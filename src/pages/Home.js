import React from 'react';
import Hero from "../components/Hero";
import About from '../components/About';
import MainAbout from '../components/MainAbout';
import HeroMain from '../components/HeroMain';
import CityViewAbout from '../components/CityViewAbout';
import Footer from '../components/Footer';
import PeopleList from '../components/PeopleList';

function Home({ isLoggedIn }) {
    return (
        <div>
            <Hero />
            <About />
            <MainAbout />
            <PeopleList />
            <HeroMain />
            <CityViewAbout />
            <Footer />
        </div>
    )
}

export default Home;
