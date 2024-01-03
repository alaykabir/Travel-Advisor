// import React from "react";
import { useState, useEffect } from "react";
//useEffect is a Callback Function

import { Box, Grid } from "@mui/material";
// The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout.

import Header from "./components/Header";
import Places from "./components/Places";
import Map from "./components/Map";
// import PlaceDetails from "./components/PlaceDetails";

//API imports
import { getPlaceData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  //For the first time when user lands
  useEffect(() => {
    //It is browser builtin location api
    //In there, we are gonna have a callback function and pass a destructured coordinates argument and set it.
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({
          lat: latitude,
          lng: longitude,
        });
      }
    );
  }, []);

  //When it changes
  useEffect(() => {
    console.log(coordinates, bounds);
    //We are passing object of bounds to the travel api to then get the data
    getPlaceData(coordinates.lat, coordinates.lng).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <Places places={places} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
// export default function App() {
//   return <div>hello</div>;
// }
