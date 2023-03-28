import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="page-footer">
            <p className="copyright--text">Copyright © 2023. All rights are reserved</p>
            <p className="social-links-footer">
                <a href="https://www.linkedin.com/in/jeffrey-riazonda/"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon-footer" /></a>
                <a href="https://github.com/Jefgit"><FontAwesomeIcon icon={faGithubSquare} className="git-icon-footer"/></a>
            </p>
        </footer>
    )
}