import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Marker as LeafletMarker, icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapStyle.css';
import { HiLocationMarker } from 'react-icons/hi';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

LeafletMarker.prototype.options.icon = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const Map = ({ latitude, longitude, address, name }) => {
  const [position, setPosition] = useState();
  // when the component mounts we want to set the position of the map before the component is rendered
  useEffect(() => {
      setPosition([latitude, longitude]);
  }, []);

  // console.log(position);
  // console.log(position[1]);

  return position && (
      <MapContainer center={ position[1] && position[0] !== undefined ? {lat: position[0], lng: position[1]} : null} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={ position[1] && position[0] !== undefined ? {lat: position[0], lng: position[1]} : null} >
        <Popup>
          {'El ' + name + ' esta ubicado en ' + address}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map