import React from "react";
//Components imports
import PlaceDetails from "../components/PlaceDetails";
//MUI Form imports
import { Box, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Places() {
  const [type, setType] = React.useState("");
  const [rating, setRating] = React.useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  const places = [
    { name: "Place 1" },
    { name: "Place 2" },
    { name: "Place 3" },
  ];

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl
        sx={{
          m: 1,
          minWidth: 130,
        }}
      >
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Age"
          onChange={handleChangeType}
        >
          <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
          <MenuItem value={"Hotel"}>Hotel</MenuItem>
          <MenuItem value={"Attractions"}>Attractions</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          minWidth: 130,
        }}
      >
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rating}
          label="Age"
          onChange={handleChangeRating}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} style={{ width: "100%" }}>
        {places?.map((place, i) => (
          <Grid item xs={12} key={i}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
