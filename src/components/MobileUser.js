import { Marker, Popup, useMapEvents, Circle } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react'

const phone = new Icon({
    iconUrl: "/phone.png",
    iconSize: [30, 30]
})

const mobileRangeOptions = { fillColor: 'cyan' }

const MobileUser = () => {
  const [toggleCoverage, setToggleCoverage] = useState()
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker 
          position={position}
          icon={phone}
          >
            <Popup>
                <h3>Mobile User</h3>
                  <Circle
                      center={position}
                      pathOptions={mobileRangeOptions}
                      radius={1000}
                      stroke={false}
                      eventHandlers={{
                        click: () => {
                          setToggleCoverage(prevState => !prevState)
                        }
                        }} />
            </Popup>
          </Marker>
        )
      }

    return (
        <LocationMarker />
    )
}

export default MobileUser
