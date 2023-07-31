import {GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'
import {useMemo} from 'react'

function MapComponent() {
  const center = useMemo(() => ({lat: 37.556076, lng: 126.921527}), [])

  return (
    <LoadScriptNext googleMapsApiKey={`AIzaSyB9pOeIxO44Vhf6VCi35iiO0tnkO1EqdsM`}>
      <GoogleMap zoom={18} center={center} id="map" options={{
        disableDefaultUI: true,
        mapId:"e175f89ac704555c"
      }}>
        <Marker position={{ lat: 37.556107, lng: 126.921539 }} icon={{url: '../assets/images/logo_marker.svg', scale: 5}} />
      </GoogleMap>
    </LoadScriptNext>
  )
}
export default MapComponent