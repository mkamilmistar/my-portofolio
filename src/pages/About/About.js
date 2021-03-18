import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Activity from '../../components/Activity/Activity';
import './About.css';


function About() {
    return (
        <>
            <div className="about-container">
                <div className="section1">
                    <div className="card2-container">
                        <div className="img2-container">
                            <img src="images/emil.jpg" alt=""/>
                        </div>
                        <div className="card2-content">
                            <div className="card2-title">
                                <h3>Hi, I'm M. Kamil but you can call me Emil</h3>
                            </div>
                            <div className="card2-body">
                                <p>I am a final year of Computer Science student currently completing research. I handle <b>Front-End Web and Mobile Development</b>. I have high motivation to learn new things, have high enthusiasm, honest, and take responsibility for assignments and work</p>
                            </div>
                            <div className="logo">
                                <section className='social-media2'>
                                    <div className='social-media-wrap2'>
                                        <div className='social-icons2'>
                                            <Link
                                            to={'//www.github.com/mkamilmistar'}
                                            className='social-icon-link2'
                                            target='_blank'
                                            aria-label='Github'
                                            >
                                            <FaGithub />
                                            </Link>
                                            <Link
                                            to={'//www.facebook.com/v.kamil7'}
                                            className='social-icon-link2'
                                            target='_blank'
                                            aria-label='Facebook'
                                            >
                                            <FaFacebook />
                                            </Link>
                                            <Link
                                            to={'//www.instagram.com/projectanemil'}
                                            className='social-icon-link2'
                                            target='_blank'
                                            aria-label='Instagram'
                                            >
                                            <FaInstagram />
                                            </Link>
                                            <Link
                                            to={'//www.twitter.com/mkamilmistar'}
                                            className='social-icon-link2'
                                            target='_blank'
                                            aria-label='Twitter'
                                            >
                                            <FaTwitter />
                                            </Link>
                                            <Link
                                            to={'//id.linkedin.com/in/mkamilmistar'}
                                            className='social-icon-link2'
                                            target='_blank'
                                            aria-label='LinkedIn'
                                            >
                                            <FaLinkedin />
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="card2-small">
                                <h4>Here's a little peak of what I've been doing besides coding</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="title-container">
                        <h1>Activities</h1>
                    </div>
                    <Activity
                        title="BEM KM IPB"
                        job="Media and Branding Bureau Staff"
                        section="2018-2019"
                        desc=" An extension of the BEM KM in communicating with IPB
                        students, namely through digital media and social media and
                        participating in introducing IPB to the community"
                        img="images/bemkm.jpg"
                    />
                </div>
                <div className="section3">                    
                    <Activity
                        title="BEM PPKU IPB"
                        job="Research, Communication and Information Department Staff"
                        section="2017-2018"
                        desc="The information center about BEM PPKU IPB is in the form of
                        publications, and responsible for digital design to support the
                        entire work program of BEM PPKU
                        "
                        img="images/bemppku.jpg"
                    />
                </div>
                <div className="section4">                    
                    <Activity
                        title="IT-TODAY 2019"
                        job="Creative Staff"
                        section="2018-2019"
                        desc="IT-TODAY is a national event organized by IPB University that carries all technology-based competitions and activities. The events held include AppsToday, HackToday, National IT Seminar, Business Plan competition.
                        "
                        img="images/ittoday19.jpg"
                    />
                </div>
                <div className="section5">                    
                    <Activity
                        title="IT-TODAY 2018"
                        job="Creative Staff"
                        section="2017-2018"
                        desc="IT-TODAY is a national event organized by IPB University that carries all technology-based competitions and activities. The events held include AppsToday, HackToday, National IT Seminar, Business Plan competition.
                        "
                        img="images/ittoday18.jpg"
                    />
                </div>
            </div>
        </>
    )
}

export default About
