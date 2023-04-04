import React from "react"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    
    const [toggleClass, setToggleClass] = React.useState("mobile-links");
    // const [toggleButton, setToggleButton] = React.useState("open-menu-button");
    function onClickHandler(){
        setToggleClass(prevClass => {
            return prevClass === "mobile-links" ? "toggle--navlink" : "mobile-links"
        })
        // setToggleButton(prevButton => {
        //     return prevButton === "" ? "open-menu-button" : ""
        // })

    }
    return(
        <header className="my-header">
            <Link to="/" className="my-logo">Jep.dev</Link>
            <nav className="my-links" >
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="." 
                    >
                    Home
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="about" 
                    >
                    About
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="projects"
                    >
                    Projects
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="contacts"
                    >
                    Contacts
                </NavLink>
            </nav>
            <nav className={`my-nav-links ${toggleClass}`} >
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="." 
                    onClick={onClickHandler}
                    >
                    Home
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="about" 
                    onClick={onClickHandler}
                    >
                    About
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="projects"
                    onClick={onClickHandler}
                    >
                    Projects
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "link--active" : ""} 
                    to="contacts"
                    onClick={onClickHandler}
                    >
                    Contacts
                </NavLink>
                <button onClick={onClickHandler} className="close-button" ><FontAwesomeIcon icon={faXmark} /></button>
            </nav>
            <button onClick={onClickHandler} className="open-menu-button" ><FontAwesomeIcon icon={faBars} /></button>
        </header>
        
        
    )
}