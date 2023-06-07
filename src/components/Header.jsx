import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    
    const [toggleClass, setToggleClass] = useState("mobile-links");
    const [activeLink, setActiveLink] = useState("home");
    
    // useEffect(() => {
    //     console.log(activeLink)
    // },[])
    

    function onClickHandler(){
        setToggleClass(prevClass => {
            return prevClass === "mobile-links" ? "toggle--navlink" : "mobile-links"
        })
    }
    return(
        <header className="my-header">
            <a href="#home" className="my-logo">Jep.dev</a>
            <nav className="my-links" >
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#home" 
                    // onClick={setActiveLink("home")}
                    >
                    Home
                </a>
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#about" 
                    // onClick={setActiveLink("about")}
                    >
                    About
                </a>
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#projects"
                    >
                    Projects
                </a>
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#contacts"
                    >
                    Contacts
                </a>
            </nav>
            <nav className={`my-nav-links ${toggleClass}`} >
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#home" 
                    onClick={onClickHandler}
                    >
                    Home
                </a>
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#about" 
                    onClick={onClickHandler}
                    >
                    About
                </a>
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#projects"
                    onClick={onClickHandler}
                    >
                    Projects
                </a>
                <a 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    href="#contacts"
                    onClick={onClickHandler}
                    >
                    Contacts
                </a>
                <button onClick={onClickHandler} className="close-button" ><FontAwesomeIcon icon={faXmark} /></button>
            </nav>
            <button onClick={onClickHandler} className="open-menu-button" ><FontAwesomeIcon icon={faBars} /></button>
        </header>
        
        
    )
}