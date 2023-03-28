import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import vanlife from '../assets/vanlife.jpg'

export default function Projects(){
    return(
        <main className="projects-page">
            <div className="projects--text">
                <h3 className="portfolio--text">PORTFOLIO</h3>
                <h4 className="intro--text">Some Text Here</h4>
            </div> 
            <div className="portfolio--items">
                <div className="portfolio--item">
                    <img className="project--image" src={vanlife} alt="" />
                    <div className="project--details">
                        <p className="project--name">VAN RENTALS</p>
                        <p className="project--description">
                            A web application where users 
                            can rent van for travel purposes. 
                            Users can browse vans with numerous types for a specific use.
                        </p>
                        <div className="project--stackuse">
                            <p className="react--stack">React</p>
                        </div>
                        <div className="project--links">
                            <a href="">Code <FontAwesomeIcon icon={faGithubSquare} className="git-icon-project"/></a>
                            <a href="">Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-icon-project" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}