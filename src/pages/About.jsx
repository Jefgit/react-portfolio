import React from "react"
import demopic from '../assets/demopic.jpg'

export default function About(){
    return(
        <main id="about" className="about-page">
            <article className="about-container">
                <img className="aboutme--image" src={demopic} alt="" />
                <section className="aboutme--section">
                    <p className="aboutme--title">ABOUT ME</p>
                    <h3 className="aboutme--intro">
                        A tech savvy, creative and innovative Front-End Developer 
                        with continuous learning and application of my web development skills. 
                    </h3>
                    <p className="aboutme--context">
                        As a front-end developer I have aquired knowledge and expertise 
                        in making a web design into a working web interface with the result of 
                        making the user experience as comfortable as possible and putting in mind the 
                        readability and reausability of a clean code.
                    </p>
                </section>
            </article>
        </main>
    )
}