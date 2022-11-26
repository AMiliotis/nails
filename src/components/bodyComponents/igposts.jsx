import { Stack } from "@mui/system";
import React from "react";

export default function Igposts() {
  return (
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
  );
}
