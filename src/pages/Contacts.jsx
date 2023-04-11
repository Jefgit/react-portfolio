import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contacts(){
    return(
        <main className="contact-page">
            <h1 className="contact--title">CONTACT</h1>
            <h2 className="get--intouch">Let's get in touch<span>💬</span></h2>
            <section className="contact--content">
                <div className="contact--location">
                    <i className="location-icon-container">
                        <FontAwesomeIcon icon={faLocationDot}  className="location--icon" />
                    </i>
                    <div>
                        <p className="location--title">Location</p>
                        <p className="my--location">Cagayan, Philippines</p>
                    </div>
                </div>
                <div className="contact--email">
                    <i className="email-icon-container">
                        <FontAwesomeIcon icon={faSquareEnvelope} className="email--icon"/>
                    </i>
                    <div>
                        <p className="email--title">Email</p>
                        <Link 
                            to='#'
                            onClick={() => window.location = 'mailto:riazondajf@gmail.com'} 
                            className="my--email"
                            >
                            riazondajf@gmail.com
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}