import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header className="my-header">
            <Link to="/" className="my-logo">Jep.dev</Link>
            <nav className="my-links">
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
        </header>
        
        
    )
}