import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function BHours() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={2}
      marginBottom={1}
      sx={{
        "& > :not(style)": {
          m: 1,
          width: 500,
          height: 250,
        },
      }}
    >
      <Paper
        elevation={5}
        sx={{
          bgcolor: "secondary.main",
          border: "1px solid black",
          boxShadow: "3px 3px 6px gray",
        }}
      >
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
            <Typography sx={{ fontWeight: "bold" }}>Τρίτη/Tuesday: </Typography>
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
  );
}
