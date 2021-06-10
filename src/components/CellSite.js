import { Marker, Popup, Circle } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react'

const cellSite = new Icon({
    iconUrl: "/celltower.png",
    iconSize: [40, 40]
})

const siteCoverageOptions = { fillColor: 'green' }

const CellSite = ({id, location, name, with2G, with3G, with4G}) => {
    const [toggleCoverage, setToggleCoverage] = useState(false)
    return (
        <Marker 
            key={id}
            position={location}
            icon={cellSite}
            eventHandlers={{
                click: () => {
                setToggleCoverage(prevState => !prevState) 
                  }
                }}>
            <Popup>
                <h4>Site ID: </h4>
                <p>{id}</p>
                <h4>Site Name: </h4>
                <p>{name}</p>
                <h4>With 4G: </h4>
                <p>{with2G}</p>
                <h4>With 3G: </h4>
                <p>{with3G}</p>
                <h4>With 2G: </h4>
                <p>{with4G}</p>
                {toggleCoverage && (
                    <Circle
                    center={location}
                    pathOptions={siteCoverageOptions}
                    radius={1000}
                    stroke={false}  />
                )}
            </Popup>
        </Marker>
    )
}

export default CellSite
