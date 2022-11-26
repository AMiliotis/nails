import {
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";

export default function Body() {
  return (
    <React.Fragment>
      <Box textAlign="center">
        <Typography
          variant="h4"
          color="black"
          noWrap
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

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        sx={{ marginTop: 3, padding: 2 }}
      >
        {" "}
        <iframe
          title="IPost1"
          src="https://www.instagram.com/p/Ci5WyVgDuDi/embed"
          width="400"
          height="400"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
        <iframe
          title="IPost2"
          src="https://www.instagram.com/p/CiNzdOTDADf/embed"
          width="400"
          height="400"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
        <iframe
          title="IPost3"
          src="https://www.instagram.com/p/Ck-uy4XD4u1/embed"
          width="400"
          height="400"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
        <iframe
          title="IPost4"
          src="https://www.instagram.com/p/CeBH8ilDI3A/embed"
          width="400"
          height="400"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
      </Stack>

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

      <Box>
        <ImageList variant="masonry" cols={3} gap={3} sx={{ padding: 6 }}>
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
    img: "https://lh3.googleusercontent.com/p/AF1QipO0UefnZFX5kB6gOR1a5vczGIdOyZIhYssnNRmh=s680-w680-h510",
    title: "Entrance",
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
