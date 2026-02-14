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
                        A creative and innovative Front-End Developer 
                        creating user-friendly and efficient websites that are visually appealing and easy to navigate. 
                    </h3>
                    <p className="aboutme--context">
<<<<<<< HEAD
                        As a front-end developer I have acquired knowledge and expertise 
=======
                        As a front-end developer I have aquired knowledge and expertise 
>>>>>>> 2b50e2253d3b9634b282acd1bb61f768184b8867
                        in making a web design into a working web interface with the result of 
                        making the user experience as comfortable as possible and putting in mind the 
                        readability and reausability of a clean code.
                    </p>
                </section>
            </article>
        </main>
    )
}