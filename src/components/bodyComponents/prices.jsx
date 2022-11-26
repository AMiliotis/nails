import { Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Prices() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
