// import React from "react";

// The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon.

import { Box, Grid } from "@mui/material";
// The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout.

import Header from "./components/Header";
import Places from "./components/Places";
import Map from "./components/Map";
// import PlaceDetails from "./components/PlaceDetails";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <Places />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
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
