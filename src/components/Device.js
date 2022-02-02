import { useState, useEffect } from 'react'
import { Marker, Popup} from 'react-leaflet'
import { Icon } from 'leaflet'




const Device = ({id, deviceType, location, name, status}) => {
    const [icon, setIcon] = useState()
    const cellSite = new Icon({
        iconUrl: `/HFC_Symbols/${icon}.png`,
        iconSize: [80, 80]
    })

    useEffect(()=>{
        switch(deviceType) {
            case "HFC Node":
              setIcon("node_hfc")
              break
            case "Fiber Node":
                setIcon("node_fiber")
                break
            case "Trunk Amplifier":
                setIcon("trunk")
                break
            case "Line Extender":
                setIcon("le")
                break
            /*case "TLP Splitter":
                setIcon("tlp")
                break
            case "DC8 Splitter":
                setIcon("dc8")
                break*/
          }
    },[])
    
    return (
        <Marker 
            key={id}
            position={location}
            icon={cellSite}>
            <Popup>
                <h4>Device: </h4>
                <p>{deviceType}</p>
                <h4>ID: </h4>
                <p>{id}</p>
                <h4>Node Location: </h4>
                <p>{name}</p>
                <h4>Status: </h4>
                <p>{status}</p>
            </Popup>
        </Marker>
    )
}

export default Device
