import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import html_icon from '../assets/html-5.svg'
import css_icon from '../assets/css-3.svg'
import javascript_icon from '../assets/javascript.svg'
import react_icon from '../assets/react.svg'
import mypic from '../assets/pic.jpg'

export default function Home(){
    return(
        <main className="home-page">
            <section className="my--info">
                <h1 className="my--role">Front-End React Developer</h1>
                <h4 className="my--description">Hi, I am Jeffrey Riazonda. A skilled Front-End React Developer based in Cagayan, Philippines.</h4>
                <p className="social--links">
                    <a href="https://www.linkedin.com/in/jeffrey-riazonda/"><FontAwesomeIcon icon={faLinkedin} className="linkedin--icon" /></a>
                    <a href="https://github.com/Jefgit"><FontAwesomeIcon icon={faGithubSquare} className="git--icon"/></a>
                </p>
                <div className="tech--stacks">
                    <span className="stack--text">Tech Stack</span>
                    <div className="tech-icons-container">
                        <span className="icon--container"><img className="tech--icon" src={html_icon} alt="" /></span>
                        <span className="icon--container"><img className="tech--icon" src={css_icon} alt="" /></span>
                        <span className="icon--container"><img className="tech--icon" src={javascript_icon} alt="" /> </span>
                        <span className="icon--container"><img className="tech--icon" src={react_icon} alt="" /> </span>
                    </div>     
                </div>
            </section>
            <img className="my--image" src={mypic} alt="" />
        </main>
    )
}