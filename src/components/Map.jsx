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

function Map({ setCoordinates, setBounds, coords, places }) {
  // console.log(coordinates);

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }
  return (
    <div>
      <MapContainer center={coords} zoom={10} scrollWheelZoom={false}>
        <SetViewOnClick coords={coords} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>Your City is Here.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
