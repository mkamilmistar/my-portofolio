import React from 'react'
import "./HeroSection.css";

function HeroSection({
    lightBg, topLine, LightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart, logo=false
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <h1 className={LightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <div className="top-line">
                                    {topLine}
                                </div>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                    {description}
                                </p>
                            </div>
                        </div>
                        {logo ? (
                            <div className="col2">
                                <div className="row">
                                    <div className="col2">
                                        <img src="images/laravel.png" alt={alt} className="home__hero-logo"/>
                                    </div>
                                    <div className="col2">
                                        <img src="images/react.webp" alt={alt} className="home__hero-logo"/>
                                    </div>
                                    <div className="col2">
                                        <img src="images/angular.png" alt={alt} className="home__hero-logo"/>
                                    </div>
                                    <div className="col2">
                                        <img src="images/ionic.png" alt={alt} className="home__hero-logo"/>
                                    </div>
                                </div>
                            </div>
                        ) :
                        (<div></div>)
                        }
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
