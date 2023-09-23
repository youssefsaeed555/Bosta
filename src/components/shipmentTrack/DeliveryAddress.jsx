import { Box, Paper } from "@mui/material";
import React from "react";
import LANGUAGE from "../../shared/languages/language";

function DeliveryAddress() {
  const { DELIVERY_ADDRESS, NOT_DETERMINED } = LANGUAGE.SHIPMENT_TRACKING;

  return (
    <>
      <Box sx={{ fontWeight: "bold", my: "5px" }}>{DELIVERY_ADDRESS}</Box>
      <Paper
        sx={{
          backgroundColor: "#fafafa",
          border: "1px solid white",
          padding: "15px",
          mb: "20px",
        }}
      >
        {NOT_DETERMINED}
      </Paper>
    </>
  );
}

export default DeliveryAddress;
