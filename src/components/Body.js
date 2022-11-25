import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ListIcon from "@mui/icons-material/List";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Body() {
  return (
    <React.Fragment>
      <Box textAlign="center">
        <Typography
          variant="h4"
          color="black"
          sx={{
            fontFamily: "Dancing Script",
            marginTop: 2,
            fontWeight: "bold",
          }}
        >
          Follow us on Instagram!
        </Typography>
        <IconButton
          href="https://www.instagram.com/naild_it_by_anni/"
          sx={{
            flexWrap: "nowrap",
            marginTop: 2,
            border: "2px solid black",
            background:
              "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
          }}
        >
          <InstagramIcon
            fontSize="large"
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </Box>
      <Box textAlign="center" sx={{ marginTop: 3 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Dancing Script",
            textDecoration: "underline dotted",
          }}
        >
          Some examples of our work
        </Typography>
      </Box>

      <Box>
        <ImageList variant="masonry" cols={3} gap={8}>
          {nailImages.map((item) => (
            <ImageListItem key={item.img}>
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

      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Dancing Script",
            textDecoration: "underline dotted",
          }}
        >
          Our shop
        </Typography>
      </Box>

      <Box>
        <ImageList variant="masonry" cols={3} gap={8}>
          {insideImages.map((item) => (
            <ImageListItem key={item.img}>
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

      <Stack
        sx={{ marginTop: 2 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        {" "}
        <Accordion
          square="true"
          sx={{
            width: "40%",
            borderRadius: 4,
            boxShadow: "5px 5px 10px gray",
            border: "2px solid black",
            marginLeft: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<WatchLaterIcon sx={{ color: "black" }} />}
          >
            <Typography variant="h4" sx={{ fontFamily: "Dancing Script" }}>
              Business Hours
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <Stack sx={{ overflow: "auto" }}>
              <Stack direction="row">
                <Typography sx={{ fontWeight: "bold" }}>
                  Δευτέρα/Monday:{" "}
                </Typography>
                <Typography sx={{ marginLeft: 2 }}>Closed</Typography>
              </Stack>

              <Stack direction="row">
                <Typography sx={{ fontWeight: "bold" }}>
                  Τρίτη/Tuesday:{" "}
                </Typography>
                <Typography sx={{ marginLeft: 2 }}>10AM-8PM</Typography>
              </Stack>

              <Stack direction="row">
                <Typography sx={{ fontWeight: "bold" }}>
                  Τετάρτη/Wednesday:{" "}
                </Typography>
                <Typography sx={{ marginLeft: 2 }}>10AM-6PM</Typography>
              </Stack>

              <Stack direction="row">
                {" "}
                <Typography sx={{ fontWeight: "bold" }}>
                  Πέμπτη/Thursday:{" "}
                </Typography>
                <Typography sx={{ marginLeft: 2 }}>10AM-8PM</Typography>
              </Stack>

              <Stack direction="row">
                <Typography sx={{ fontWeight: "bold" }}>
                  Παρασκευή/Friday:{" "}
                </Typography>
                <Typography sx={{ marginLeft: 2 }}>10AM-8PM</Typography>
              </Stack>

              <Stack direction="row">
                {" "}
                <Typography sx={{ fontWeight: "bold" }}>
                  Σάββατο/Saturday:{" "}
                </Typography>
                <Typography sx={{ marginLeft: 2 }}>9AM-6PM</Typography>
              </Stack>

              <Stack direction="row">
                <Typography sx={{ fontWeight: "bold" }}>
                  Κυριακή/Sunday:{" "}
                </Typography>
                <Typography sx={{ marginLeft: 2 }}>Closed</Typography>
              </Stack>
              <Divider />
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square={true}
          sx={{
            width: "40%",
            borderRadius: 4,
            boxShadow: "5px 5px 10px gray",
            border: "2px solid black",
            marginRight: 1,
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ListIcon sx={{ color: "black" }} />}>
            <Typography variant="h4" sx={{ fontFamily: "Dancing Script" }}>
              Prices
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>One item</Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </React.Fragment>
  );
}

const insideImages = [
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipO0UefnZFX5kB6gOR1a5vczGIdOyZIhYssnNRmh=s680-w680-h510",
    title: "Entrance",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipNHzOQkd0szvjuoAncRWOOsyAw7uSyU-ZlZ43F8=s680-w680-h510",
    title: "Bath",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipNZ4FNHT3RSCn2cD_UuaE28tD_CCtJEOKI_yeW7=s680-w680-h510",
    title: "Inside",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipOMthc8kfFHdMA798a7BRBXnaRgSzbWNiyYlLki=s680-w680-h510",
    title: "Inside2",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipO0fN69N8Cf5F4O7-Vy5SIpeut4PuLDCWMNfCLY=s680-w680-h510",
    title: "Inside3",
  },
];

const nailImages = [
  {
    img: "",
    title: "nail1",
  },
];
