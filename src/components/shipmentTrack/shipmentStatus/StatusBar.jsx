import React from "react";
import { Container, Grid, Box } from "@mui/material";
import ShipmentStatusItems from "./ShipmentStatusItems";
import LANGUAGE from "../../../shared/languages/language";
import ShipmentProgressItems from "./ShipmentProgressItems";

function StatusBar() {
  return (
    <Container style={{ marginTop: 10 }}>
      <Grid container spacing={2}>
        <ShipmentProgressItems state="PACKAGE_RECEIVED" hasFirst />
        <ShipmentProgressItems state="OUT_FOR_DELIVERY" />
        <ShipmentProgressItems state="DELIVERED" />
      </Grid>
      <Grid container sx={{ pt: "20px" }} spacing={3}>
        <ShipmentStatusItems
          title={LANGUAGE.SHIPMENT_STATE["SHIPMENT_CREATED"]}
          style={{
            textAlign: LANGUAGE.language === "ar" ? "right" : "left",
          }}
        />
        <ShipmentStatusItems
          title={LANGUAGE.SHIPMENT_STATE["PACKAGE_RECEIVED"]}
          style={{ textAlign: LANGUAGE.language === "ar" ? "right" : "left" }}
        />
        <ShipmentStatusItems
          title={LANGUAGE.SHIPMENT_STATE["OUT_FOR_DELIVERY"]}
          style={{ textAlign: LANGUAGE.language === "ar" ? "left" : "right" }}
        />
        <ShipmentStatusItems
          title={LANGUAGE.SHIPMENT_STATE["DELIVERED"]}
          style={{ textAlign: LANGUAGE.language === "ar" ? "left" : "right" }}
          gap={{ mx: "80px" }}
        />
      </Grid>
    </Container>
  );
}

export default StatusBar;
