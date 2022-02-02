import { useState, useEffect} from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import Crew from './Crew'
import Device from './Device'
import firebaseDb from '../firebase'

const defPosition = [15.13454, 120.59050]
const streetAttr = 'Tiles &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const streetUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const satelliteAttr = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
const satelliteUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
const darkAttr = 'Tiles &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
const darkUrl = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'

const optionValues =[
    {name: "Street",
    value: "Street"},
    {name: "Satellite",
    value: "Satellite"},
    {name: "Dark",
    value: "Dark"},
]

const Map = () => {
    const [attr, setAttr] = useState(streetAttr)
    const [devices, setDevices] = useState({})
    const [mapMode, setMapMode] = useState(attr)
    const [url, setUrl] = useState(streetUrl)

    const refreshPage = () => {
        window.location.reload(false);
      }

    useEffect(() => {
        firebaseDb.child('hfc-nodes').on('value', snapshot =>{
            if(snapshot.val() != null){
                setDevices({
                    ...snapshot.val()
                })
            }
            else{
                setDevices({})
            }
        })
    },[])

    useEffect(()=>{
        switch(mapMode) {
            case "Street":
                setAttr(streetAttr)
                setUrl(streetUrl)
                 break
            case "Satellite":
                setAttr(satelliteAttr)
                setUrl(satelliteUrl)
                break
            case "Dark":
                setAttr(darkAttr)
                setUrl(darkUrl)
                break
          }
          
    },[mapMode])

    const handleInputChange = e => {
        setMapMode(e.target.value)
        //refreshPage()
        //window.location.reload(true)
    }

    return (
        <>
            <div className="container-select-map">
            <select className="select-map" placeholder="Device Type" name="type" value={mapMode} 
                required="required" onChange={handleInputChange}>
                    {optionValues.map((val, key) => 
                    <option key={key} value={val.value}>{val.name}</option>)
                    }
                </select>
            </div>
            <MapContainer center={defPosition} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution={attr}
                    url={url}
                />
                <Crew location={defPosition}/>
                {Object.values(devices).map((device, key) => (
                    <Device 
                    key={key}
                    deviceType={device.type}
                    id={device.ID} 
                    location={[
                        device.latitude,
                        device.longitude
                    ]} 
                    name={device.location}
                    status={(device.activeStatus === "1") ? "Active" : "Inactive"}
                    />
                ))}
            </MapContainer>
        </>
    )
}

export default Map
