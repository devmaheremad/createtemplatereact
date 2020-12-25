import React, { Fragment } from 'react'
import Header from './../Header/Header'
import Work from './../Work/Work'
import Portfolio from './../Portfolio/Portfolio'
import Profile from './../Profile/Profile'
import About from './../About/About'
import Social from './../Social/Social'
import Footer from './../Footer/Footer'

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <Social />
            <Footer />
        </Fragment>
    )
}

export default Home