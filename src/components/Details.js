import React from 'react'


const Details = ({deviceType, id, location, latitude, longitude, status}) => {
    return (
        <table data-testid="details" className="information">
            <tbody>
                <tr className="info"><td className="info-label">Type: </td><td>{deviceType}</td></tr>
                <tr className="info"><td className="info-label">ID: </td><td>{id}</td></tr>
                <tr className="info"><td className="info-label">Location: </td><td>{location}</td></tr>
                <tr className="info"><td className="info-label">Latitude: </td><td>{latitude}</td></tr>
                <tr className="info"><td className="info-label">Longitude: </td><td>{longitude}</td></tr>
                <tr className="info"><td className="info-label">Status: </td><td>{status === "1" ? "Active" : "Inactive"}</td></tr>
            </tbody>
        </table>

    )
}

export default Details