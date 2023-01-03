import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import BHours from "./busnshours";

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
              Services
            </Typography>
            <Divider variant="middle" />
            <Typography variant="h4" gutterBottom fontFamily={"Dancing Script"}>
              Nails
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textDecoration: "underline" }}
            >
              Μανικιούρ/Πεντικιούρ
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Σχήμα και χρώμα / Shape & colour
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Βάψιμο με βερνίκι
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Μανικιούρ express / Express manicure
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Κόψιμο νυχιών, βάψιμο με βερνίκι
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Μανικιούρ ολοκληρωμένο / Full manicure
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Βάψιμο με βερνίκι
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Γαλλικό μανικιούρ / French manicure
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Πεντικιούρ απλό / Simple pedicure
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Κόψιμο νυχιών, επωνύχιων, φτέρνες, peeling, βάψιμο
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Πεντικιούρ express / Express pedicure
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Θεραπευτικό πεντικιούρ / Therapeutic pedicure
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Είσφρυση νυχιών, αφαίρεση κάλων, σκληρύνσεων, peeling, βάψιμο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Ανδρικό μανικιούρ / Male manicure
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Κόψιμο νυχιών, επωνύχιων, peeling
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Ανδρικό πεντικιούρ / Male pedicure
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Κόψιμο νυχιών, επωνύχιων, φτέρνες, peeling
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textDecoration: "underline" }}
            >
              Τεχνητά Νύχια
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Επιμήκυνση νυχιών / Nail enlargement
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Gel/Acrygel/Ακριλικό, χρώμα & nail art δώρο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Συντήρηση τεχνιτών νυχιών/ Artificial nail maintenance
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Gel/Acrygel/Ακριλικό & χρώμα και 1 nail art δώρο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Φυσική ενίσχυση / Nail reinforcement
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Gel/Acrygel/Ακριλικό & χρώμα και 1 nail art δώρο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Αφαίρεση τεχνιτών νυχιών / Artifical nail removal
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Gel/Acrygel/Ακριλικό
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Dipping
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            marginBottom: 2,
            minHeight: 981.07,
            maxHeight: 981.07,
            maxWidth: 607.17,
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom fontFamily={"Dancing Script"}>
              Nails
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textDecoration: "underline" }}
            >
              Ημιμόνιμο
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Σχήμα & χρώμα / Shape & colour
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Μανικιούρ ολοκληρωμένο με ημιμόνιμο χρώμα / Full manicure with
              semi-permanent colour
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Γαλλικό μανικιούρ ημιμόνιμο / French semi-permanent manicure
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Όμπρε με αερογράφο / Ombre with airbrush
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Πεντικιούρ ημιμόνιμο / Semi-permanent pedicure
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} gutterBottom>
              Κόψιμο νυχιών, επωνύχιων, φτέρνες, βάψιμο με ημιμόνιμο χρώμα,
              peeling
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Γαλλικό πεντικιούρ ημιμόνιμο / French semi-permanent pedicure
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Αφαίρεση / Removal
            </Typography>

            <Typography variant="h4" gutterBottom fontFamily={"Dancing Script"}>
              Makeup
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textDecoration: "underline" }}
            >
              Μακιγίαζ από
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Βραδινό / Νυφικό - Evening / Bridal
            </Typography>
            <Typography variant="p" sx={{ color: "gray" }} marginLeft={2}>
              *Σημείωση: Όλα τα εργαλεία είναι αποστηρωμένα σε κλίβανο
            </Typography>
            <Divider variant="middle" />

            <BHours />
          </CardContent>
        </Card>
      </Stack>
    </React.Fragment>
  );
}
