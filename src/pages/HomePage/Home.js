import React from 'react'
import Cards from '../../components/Cards/Cards';
import HeroSection from '../../components/HeroSection/HeroSection'
import {homeObjOne} from './Data'
import './Home.css';

function Home() {
    return (
        <>
         <HeroSection {...homeObjOne} />
         <div className="title-container">
                <h1>Featured Project</h1>
        </div>
        <Cards />
        </>
    )
}

export default Home
