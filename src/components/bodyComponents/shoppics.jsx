import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
export default function Shoppics() {
  return (
    <React.Fragment>
      <Box textAlign="center" sx={{ marginTop: 5, marginBottom: -5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Dancing Script",
            textDecoration: "underline ",
          }}
        >
          Our workshop
        </Typography>
      </Box>

      <Box marginTop={7} marginLeft={3} marginRight={3}>
        <ImageList variant="masonry" cols={3} gap={3}>
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
        </ImageList>
      </Box>
    </React.Fragment>
  );
}

const insideImages = [
  {
    img: "images/outside1.jpg",
    title: "Entrance",
  },
  {
    img: "images/inside1.jpg",
    title: "Inside",
  },
  {
    img: "images/inside2.jpg",
    title: "Inside2",
  },
  {
    img: "images/inside3.jpg",
    title: "Inside3",
  },
];
