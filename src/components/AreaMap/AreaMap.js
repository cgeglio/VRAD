import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class AreaMap extends Component {
  constructor() {
    super();
    this.state={
       lat: 39.7392,
       lng: -104.9903,
       zoom: 12,
   }
  }

 coordinates = [
  {area: "RiNo", lat: 39.7666, lng: -104.9837},
  {area: "Park Hill", lat: 39.7746, lng: -104.9223},
  {area: "LoHi", lat: 39.7598, lng: -105.0143},
  {area: "Cap Hill", lat: 39.7337, lng: -104.9799}
 ]

 render() {
    return (
      <Map
         center={[this.state.lat, this.state.lng]}
         zoom={this.state.zoom}
         style={{ width: '70%', height: '400px'}}
      >
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       {this.coordinates.map(area => {
        const point= [area.lat, area.lng]

        return (
        <Marker position={point} key={area.area}>
           <Popup>
            <span>{area.area}</span>
           </Popup>
         </Marker>
        )
      })
      }
     </Map>
    )
  }
}

export default AreaMap;
