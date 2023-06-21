import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import mypic from '../assets/pic.jpg'

export default function Home(){
    const techStacks = [
        {id:1, icon: "https://cdn.svgporn.com/logos/html-5.svg", name:"HTML"},
        {id:2, icon: "https://cdn.svgporn.com/logos/css-3.svg", name:"CSS"},
        {id:3, icon: "https://cdn.svgporn.com/logos/javascript.svg", name:"Javascript"},
        {id:4, icon: "https://cdn.svgporn.com/logos/react.svg", name:"React"},
        {id:5, icon: "https://cdn.svgporn.com/logos/react-router.svg", name:"React Router"},
        {id:6, icon: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg", name:"Tailwind CSS"},
    ]

    const displayTechStack = techStacks.map( tech =>  (
        <span className="icon--container" key={tech.id}>
            <img className="tech--icon" src={tech.icon} alt="HTML icon" title={tech.name}/>
        </span>
    ))
    return(
        <main id="home" className="home-page">
            <article className="home-container">
                <section className="my--info">
                    <h1 className="my--role">Front-End React Developer</h1>
                    <h4 className="my--description">Hi, I am Jeffrey Riazonda. A self-taught Front-End Developer based in Cagayan, Philippines.</h4>
                    <p className="social--links">
                        <a href="https://www.linkedin.com/in/jeffrey-riazonda/"><FontAwesomeIcon icon={faLinkedin} className="linkedin--icon" /></a>
                        <a href="https://github.com/Jefgit"><FontAwesomeIcon icon={faGithubSquare} className="git--icon"/></a>
                    </p>
                    <div className="tech--stacks">
                        <span className="stack--text">Tech Stack</span>
                        <div className="tech-icons-container">
                            {displayTechStack}
                        </div>     
                    </div>
                </section>
                <img className="my--image" src={mypic} alt="Profile Picture" />
            </article>  
        </main>
    )
}