import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    
    const [toggleClass, setToggleClass] = useState("mobile-links");
    

    function onClickHandler(){
        setToggleClass(prevClass => {
            return prevClass === "mobile-links" ? "toggle--navlink" : "mobile-links"
        })
    }
    return(
        <header className="my-header">
            <a href="#home" className="my-logo">Jep.dev</a>
            <nav className="my-links" >
                <a href="#home" >Home</a>
                <a href="#about" >About</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </nav>
            <nav className={`my-nav-links ${toggleClass}`} >
                <a  
                    href="#home" 
                    onClick={onClickHandler}
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    onClick={onClickHandler}
                >
                    About
                </a>
                <a 
                    href="#projects"
                    onClick={onClickHandler}
                >
                    Projects
                </a>
                <a 
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