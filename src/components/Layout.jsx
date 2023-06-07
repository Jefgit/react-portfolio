import React from "react"
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contacts from "../pages/Contacts"
import Header  from "./Header"
import Footer from "./Footer"

export default function Layout(){
    return(
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contacts />
            <Footer />
        </>
    )
}