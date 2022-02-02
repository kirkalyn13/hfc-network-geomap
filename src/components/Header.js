import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { Button } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import ListIcon from '@mui/icons-material/List'

const btnStyle = {
    backgroundColor: '#00BCD4', 
    color: '#000',
    fontWeight:"bold", 
    width: "200px",
}

const Header = () => {
    return (
        <div className="header">
            <div className="container-head">
                <img className="img" src="logo.png" alt=""/>
                <h1 className='title'>HFC Network GeoMap</h1>
            </div>
            <div className="container-nav">
                <nav>
                    <Router>
                    <Link to="/">
                        <Button variant="contained"  style={btnStyle} startIcon={<MapIcon />}>
                            VIEW MAP
                        </Button>
                    </Link>
                    <Link to="/manage">
                    <Button variant="contained"  style={btnStyle} startIcon={<ListIcon />}>
                            MANAGE SITES
                        </Button>
                    </Link>
                    </Router>
                </nav>
            </div>   
        </div>
    )
}

export default Header
