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
              Prices
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
              Σχήμα και χρώμα / Shape & colour 5€
            </Typography>
            <Typography variant="p" gutterBottom>
              Βάψιμο με βερνίκι
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Μανικιούρ express / Express manicure 8€
            </Typography>
            <Typography variant="p" gutterBottom>
              Κόψιμο νυχιών, βάψιμο με βερνίκι
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Μανικιούρ ολοκληρωμένο / Full manicure 12€
            </Typography>
            <Typography variant="p" gutterBottom>
              Βάψιμο με βερνίκι
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Γαλλικό μανικιούρ / French manicure +2€
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Πεντικιούρ απλό / Simple pedicure 18€
            </Typography>
            <Typography variant="p" gutterBottom>
              Κόψιμο νυχιών, επωνύχιων, φτέρνες, peeling, βάψιμο
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Πεντικιούρ express / Express pedicure 8€
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Θεραπευτικό πεντικιούρ / Therapeutic pedicure 24€
            </Typography>
            <Typography variant="p" gutterBottom>
              Είσφρυση νυχιών, αφαίρεση κάλων, σκληρύνσεων, peeling, βάψιμο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Ανδρικό μανικιούρ / Male manicure 10€
            </Typography>
            <Typography variant="p" gutterBottom>
              Κόψιμο νυχιών, επωνύχιων, peeling
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Ανδρικό πεντικιούρ / Male pedicure 15€
            </Typography>
            <Typography variant="p" gutterBottom>
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
              Επιμήκυνση νυχιών / Nail enlargement 35€
            </Typography>
            <Typography variant="p" gutterBottom>
              Gel/Acrygel/Ακριλικό, χρώμα & nail art δώρο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Συντήρηση τεχνιτών νυχιών/ Artificial nail maintenance 30€
            </Typography>
            <Typography variant="p" gutterBottom>
              Gel/Acrygel/Ακριλικό & χρώμα και 1 nail art δώρο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Φυσική ενίσχυση / Nail reinforcement 25€
            </Typography>
            <Typography variant="p" gutterBottom>
              Gel/Acrygel/Ακριλικό & χρώμα και 1 nail art δώρο
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Αφαίρεση τεχνιτών νυχιών / Artifical nail removal 10€
            </Typography>
            <Typography variant="p" gutterBottom>
              Gel/Acrygel/Ακριλικό
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Dipping 25€
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ marginBottom: 2, minHeight: 981.07, maxWidth: 607.17 }}>
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
              Σχήμα & χρώμα / Shape & colour 10€
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Μανικιούρ ολοκληρωμένο με ημιμόνιμο χρώμα / Full manicure with
              semi-permanent colour 15€
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Γαλλικό μανικιούρ ημιμόνιμο / French semi-permanent manicure +2€
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Όμπρε με αερογράφο / Ombre with airbrush +5€
            </Typography>
            <Typography variant="h6" fontWeight={"500"}>
              Πεντικιούρ ημιμόνιμο / Semi-permanent pedicure 20€
            </Typography>
            <Typography variant="p" gutterBottom>
              Κόψιμο νυχιών, επωνύχιων, φτέρνες, βάψιμο με ημιμόνιμο χρώμα,
              peeling
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Γαλλικό πεντικιούρ ημιμόνιμο / French semi-permanent pedicure +2€
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Αφαίρεση / Removal +5€
            </Typography>

            <Typography variant="h4" gutterBottom fontFamily={"Dancing Script"}>
              Makeup
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textDecoration: "underline" }}
            >
              Μακιγίαζ από 25€
            </Typography>
            <Typography variant="h6" fontWeight={"500"} gutterBottom>
              Βραδινό / Νυφικό - Evening / Bridal
            </Typography>
            <Divider variant="middle" />
            <BHours />
          </CardContent>
        </Card>
      </Stack>
    </React.Fragment>
  );
}
