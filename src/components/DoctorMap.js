import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default class DoctorMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      lng: this.props.long,
      zoom: 15,
      zoomOffset: 1
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div
        style={{
          paddingBottom: "5%",
          height: "500px",
          width: "800px"
        }}
      >
        <Map
          style={{
            paddingBottom: "5%",
            height: "500px",
            width: "800px",
            zIndex: 0
          }}
          center={position}
          zoom={this.state.zoom}
          zoomOffset={this.zoomOffset}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicnVzdHlyYXB0b3IiLCJhIjoiY2prOXdtZ2E5MjN3ODNxbWVsM3NyNWlsZCJ9.AVHo6o9Z68w1c2lsBXuGDg"
          />
          <Marker position={position}>
            <Popup>Dr. {this.props.name}'s office</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

// map options:
// https://api.mapbox.com/styles/v1/rustyraptor/cjkbednp4buod2rnwog2xrdtb/tiles/256/{z}/{x}/{y}
// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
