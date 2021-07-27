import React from 'react'


const SiteDetails = ({siteID, siteName, latitude, longitude, count2G, count3G, count4G}) => {
    return (
        <table className="information">
            <tr className="info"><td className="info-label">Site ID: </td><td>{siteID}</td></tr>
            <tr className="info"><td className="info-label">Site Name: </td><td>{siteName}</td></tr>
            <tr className="info"><td className="info-label">Latitude: </td><td>{latitude}</td></tr>
            <tr className="info"><td className="info-label">Longitude: </td><td>{longitude}</td></tr>
            <tr className="info"><td className="info-label">2G Count: </td><td>{count2G}</td></tr>
            <tr className="info"><td className="info-label">3G Count: </td><td>{count3G}</td></tr>
            <tr className="info"><td className="info-label">4G Count: </td><td>{count4G}</td></tr>
        </table>

    )
}

export default SiteDetails