import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Followus() {
  return (
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
  );
}
