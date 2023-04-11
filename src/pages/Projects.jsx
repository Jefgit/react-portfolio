import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import vanlife from '../assets/vanlife.jpg'

export default function Projects(){
    return(
        <main className="projects-page">
            <div className="projects--text">
                <h1 className="portfolio--text">PORTFOLIO</h1>
                <h2 className="intro--text">Check my crafts<span>👨‍💻</span></h2>
            </div> 
            <div className="portfolio--items">
                <div className="portfolio--item">
                    <a href="https://van4ever.netlify.app/">
                        <img className="project--image" src={vanlife} alt="VanLife Homepage" />
                    </a>             
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
                            <a href="https://github.com/Jefgit/van-life">Code <FontAwesomeIcon icon={faGithubSquare} className="git-icon-project"/></a>
                            <a href="https://van4ever.netlify.app/">Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-icon-project" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}