import Link from 'gatsby-link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <h1>Web Starter</h1>
            <div className="links">
                <Link to="/">Home</Link> <b/>
                <Link to="/about">About</Link> <b/>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
