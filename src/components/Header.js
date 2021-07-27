import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="container-head">
                <img className="img" src="radio.png" alt=""/>
                <h1 className='title'>Site GeoMap</h1>
            </div>
            <div className="container-nav">
                <nav>
                    <Link to="/">
                        VIEW GEOMAP
                    </Link>
                    <Link to="/manage">
                        MANAGE SITES
                    </Link>
                </nav>
            </div>   
        </div>
    )
}

export default Header
