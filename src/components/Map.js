import { useState, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MobileUser from './MobileUser'
import CellSite from './CellSite'
import firebaseDb from '../firebase'
//import siteData from "../data/site-list.json"


const defPosition = [15.13454, 120.59050]

const Map = () => {
    const [sites, setSites] = useState({})

    useEffect(() => {
        firebaseDb.child('cellsites').on('value', snapshot =>{
            if(snapshot.val() != null){
                setSites({
                    ...snapshot.val()
                })
            }
            else{
                setSites({})
            }
        })
    },[])

    return (
        <MapContainer center={defPosition} zoom={30} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MobileUser location={defPosition}/>
            {Object.values(sites).map((site, key) => (
                <CellSite 
                key={key}
                id={site.siteID} 
                location={[
                    site.latitude,
                    site.longitude
                ]} 
                name={site.siteName}
                with2G={(site.count2G === "1") ? "Yes" : "No"}
                with3G={(site.count3G === "1") ? "Yes" : "No"}
                with4G={(site.count4G === "1") ? "Yes" : "No"}
                />
            ))}
            {/*
            //For Static Mapping
            siteData.map(site => (
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
            ))*/}
        </MapContainer>
    )
}

export default Map
