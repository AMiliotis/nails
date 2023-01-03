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
        src="https://www.instagram.com/p/CmO8G4mjwNC/embed"
        width="400"
        height="400"
        frameborder="0"
        allowtransparency="true"
      ></iframe>
      <iframe
        title="IPost2"
        src="https://www.instagram.com/p/ClYektmjo9D/embed"
        width="400"
        height="400"
        frameborder="0"
        allowtransparency="true"
      ></iframe>
      <iframe
        title="IPost3"
        src="https://www.instagram.com/p/ClGdQrgj8C_/embed"
        width="400"
        height="400"
        frameborder="0"
        allowtransparency="true"
      ></iframe>
      <iframe
        title="IPost4"
        src="https://www.instagram.com/p/CmRTyhQD_Qg/embed"
        width="400"
        height="400"
        frameborder="0"
        allowtransparency="true"
      ></iframe>
    </Stack>
  );
}
