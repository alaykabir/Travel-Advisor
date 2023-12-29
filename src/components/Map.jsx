//Leaflet maps import
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

//Google maps import
import GoogleMapReact from "google-map-react";

//Layout imports
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";

//Responsive import
import useMediaQuery from "@mui/material/useMediaQuery";

//Icons import

//Css import
import "../App.css";

function Map({ setCoordinates, setBounds, coordinates }) {
  return (
    <div>
      <MapContainer
        center={[25.5941, 85.1376]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.5941, 85.1376]}>
          <Popup>Patna is Here.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
