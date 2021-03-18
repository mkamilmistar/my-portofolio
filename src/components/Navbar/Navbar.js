import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdHealing } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import "./Navbar.css";
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdHealing className="navbar-icon" />
                            MK
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <a href="https://github.com/mkamilmistar" className="btn-link">
                                        <Button buttonStyle="btn--outline">Github</Button>
                                    </a>
                                ) : (
                                    <a href="https://github.com/mkamilmistar" className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle="btn--outline"
                                                buttonSize="btn--mobile"
                                        >Github</Button>
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
