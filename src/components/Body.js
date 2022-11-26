import {
  Card,
  CardContent,
  Divider,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Followus from "./bodyComponents/followus";
import Igposts from "./bodyComponents/igposts";

export default function Body() {
  return (
    <React.Fragment>
      <Followus />
      <Igposts />

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

      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h3" gutterBottom fontFamily={"Dancing Script"}>
              Prices
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h3" gutterBottom fontFamily={"Dancing Script"}>
              Prices
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Stack
        sx={{ marginTop: 2 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        {" "}
      </Stack>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
        sx={{
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 250,
          },
        }}
      >
        <Paper elevation={5} sx={{ bgcolor: "antiquewhite" }}>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ fontFamily: "Dancing Script" }}
          >
            Business Hours
          </Typography>
          <Divider variant="middle"></Divider>
          <Stack marginLeft={2} sx={{ overflow: "auto" }}>
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
            <Divider variant="middle" />
          </Stack>
        </Paper>
      </Box>

      <Box textAlign="center" sx={{ padding: 0.6, bgcolor: "primary.main" }}>
        <iframe
          title="Bussiness"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.2599271577255!2d23.694855415568377!3d37.92435771131168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafec0a33d8961483%3A0xdcc5eeb411a0426c!2sNAIL&#39;D%20IT%20by%20Anni!5e0!3m2!1sen!2sgr!4v1669408149284!5m2!1sen!2sgr"
          width="95%"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
