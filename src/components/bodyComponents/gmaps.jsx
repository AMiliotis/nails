import React from "react";
import { Box } from "@mui/system";

export default function GMaps() {
  return (
    <Box textAlign="center" sx={{ padding: 0.6 }}>
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
  );
}
