import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

// Move this options to the Axios call
// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "X-RapidAPI-Key": "050ba38c0fmshfb12c8c5e00d479p1dfe46jsn1082ab41da43",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };

//Here we accept the bounds we passed from useEffect as arguments
export const getPlaceData = async (lat, lng) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        latitude: lat,
        longitude: lng,
        limit: "30",
        currency: "USD",
        distance: "2",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "050ba38c0fmshfb12c8c5e00d479p1dfe46jsn1082ab41da43",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {}
};
