import { Box, ImageListItem, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function Shoppics() {
  return (
    <React.Fragment>
      <Box textAlign="center" sx={{ marginTop: 5, marginBottom: -5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Dancing Script",
            textDecoration: "underline",
            textDecorationSkipInk: "none",
          }}
        >
          Our workshop
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={7}
        marginBottom={7}
      >
        <Carousel
          sx={{ width: "45%", height: 650 }}
          indicators="true"
          interval="3000"
          animation="slide"
          duration="600"
          navButtonsAlwaysInvisible
        >
          {insideImages.map((item) => (
            <ImageListItem key={item.img} className="img-container">
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                loading="lazy"
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </Carousel>
      </Box>
    </React.Fragment>
  );
}

const insideImages = [
  {
    img: "images/inside2.jpg",
    title: "Inside2",
  },
  {
    img: "images/inside3.jpg",
    title: "Inside3",
  },
];
