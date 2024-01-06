import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Box } from "@mui/material";

function PlaceDetails({ place }) {
  // console.log(place);
  return (
    <Card sx={{ width: 400 }}>
      <div>
        <Typography level="title-lg">
          {place.name ? place.name : "The Another Restaurant"}
        </Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c1/28/09/resturants.jpg?w=1200&h=-1&s=1"
          }
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="s" fontWeight="lg">
            Total price:
          </Typography>
          <Typography fontSize="s" fontWeight="s">
            {place.price ? place.price : "N/A"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="xs" fontWeight="lg">
            Ranking:
          </Typography>
          <Typography fontSize="xs" fontWeight="s">
            {place.ranking ? place.ranking : "N/A"}
          </Typography>
        </Box>
        {place?.cuisine?.map((name) => {
          <Stack direction="row" spacing={1}>
            <Chip key={name} size="small" />;
          </Stack>;
        })}
        <Box display="flex" justifyContent="space-between">
          <PlaceIcon />
          <Typography fontSize="xs" fontWeight="s">
            {place.address ? place.address : "Not Provided"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <PhoneIcon />
          <Typography fontSize="xs" fontWeight="s">
            {place.phone ? place.phone : "Not Provided"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Chip
            icon={<ReviewsIcon fontSize="small" />}
            label="Trip Advisor"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
