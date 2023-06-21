import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projects(){
    const projects = [
        {   
            id:123,
            name:"VAN RENTALS",
            description:"A web application where users can rent van for travel purposes. Users can browse vans with numerous types for a specific use.",
            github_url:"https://github.com/Jefgit/van-life",
            web_url:"https://van4ever.netlify.app",
            stack:["React","React-router", "Firebase"],
            img_url:"https://i.ibb.co/k1HPJKr/vanlife.jpg"
        },
        {   
            id:124,
            name:"DISCORD CLONE",
            description:"A clone of Discord website",
            github_url:"https://github.com/Jefgit/discord-clone",
            web_url:"https://discord-clone25.netlify.app/",
            stack:["React","React-router"],
            img_url:"https://i.ibb.co/q1RqqXC/discord-clone.png"
        },
        {   
            id:125,
            name:"GADGETS SHOP",
            description:"An ecommerce website for electronic gadgets with stripe checkout.",
            github_url:"https://github.com/Jefgit/my-ecommerce",
            web_url:"https://my-ecommerce-alpha.vercel.app",
            stack:["React","Next.js","Tailwind","MongoDB"],
            img_url:"https://i.ibb.co/2hd0PTj/my-ecommerce.png"
        }

    ]

    const displayProjects  = projects.map( project =>(
        <div className="portfolio--item" key={project.id}>
            <a href={project.web_url}>
                <img className="project--image" src={project.img_url} alt={`${project.name} Screenshot Page`} />
            </a>             
            <div className="project--details">
                <p className="project--name">{project.name}</p>
                <p className="project--description">
                    {project.description}
                </p>
                <div className="project--stackuse">
                    {project.stack.map( tech => (
                        <p className="react--stack">{tech}</p>
                    ))}             
                </div>
                <div className="project--links">
                    <a href={project.github_url}>Code <FontAwesomeIcon icon={faGithubSquare} className="git-icon-project"/></a>
                    <a href={project.web_url}>Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-icon-project" /></a>
                </div>
            </div>
        </div>
    ))
    return(
        <main id="projects" className="projects-page">
            <article className="projects-container">
                <div className="projects--text">
                    <h1 className="portfolio--text">PORTFOLIO</h1>
                    <h2 className="intro--text">Check my crafts<span>👨‍💻</span></h2>
                </div> 
                <div className="portfolio--items">
                    {displayProjects}
                </div>
            </article>
        </main>
    )
}