import { MapContainer, TileLayer } from 'react-leaflet'
import MobileUser from './MobileUser'
import CellSite from './CellSite'
import siteData from "../data/site-list.json"

const defPosition = [15.13454, 120.59050]

const Map = () => {
    
    return (
        <MapContainer center={defPosition} zoom={30} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MobileUser location={defPosition}/>
            {siteData.map(site => (
                <CellSite 
                id={site.SiteID} 
                location={[
                    site.LATITUDE,
                    site.LONGITUDE
                ]} 
                name={site.SiteName}
                with2G={(site['2GCount'] === 1) ? "Yes" : "No"}
                with3G={(site['3GCount'] === 1) ? "Yes" : "No"}
                with4G={(site['4GCount'] === 1) ? "Yes" : "No"}
                />
                    ))}
        </MapContainer>
    )
}

export default Map
