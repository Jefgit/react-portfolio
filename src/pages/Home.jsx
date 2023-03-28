import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

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
                    <span className="icon--container"><img className="tech--icon" src="./src/assets/html-5.svg" alt="" /></span>
                    <span className="icon--container"><img className="tech--icon" src="./src/assets/css-3.svg" alt="" /></span>
                    <span className="icon--container"><img className="tech--icon" src="./src/assets/javascript.svg" alt="" /> </span>
                    <span className="icon--container"><img className="tech--icon" src="./src/assets/react.svg" alt="" /> </span>
                </div>
            </section>
            <img className="my--image" src="./src/assets/pic.jpg" alt="" />
            
        </main>
    )
}