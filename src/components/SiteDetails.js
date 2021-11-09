import React from 'react'


const SiteDetails = ({siteID, siteName, latitude, longitude, count2G, count3G, count4G}) => {
    return (
        <table className="information">
            <tr className="info"><td className="info-label">Site ID: </td><td>{siteID}</td></tr>
            <tr className="info"><td className="info-label">Site Name: </td><td>{siteName}</td></tr>
            <tr className="info"><td className="info-label">Latitude: </td><td>{latitude}</td></tr>
            <tr className="info"><td className="info-label">Longitude: </td><td>{longitude}</td></tr>
            <tr className="info"><td className="info-label">2G Presence: </td><td>{count2G === "1" ? "Yes" : "No"}</td></tr>
            <tr className="info"><td className="info-label">3G Presence: </td><td>{count3G === "1" ? "Yes" : "No"}</td></tr>
            <tr className="info"><td className="info-label">4G Presence: </td><td>{count4G === "1" ? "Yes" : "No"}</td></tr>
        </table>

    )
}

export default SiteDetails