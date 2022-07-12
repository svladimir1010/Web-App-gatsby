import React from 'react'
import '../styles/global.css'
import Navbar from './Navbar'

const Layout = ( { children } ) => {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Copyright 2022 Web App</p>
            </footer>
        </div>
    )
}

export default Layout
