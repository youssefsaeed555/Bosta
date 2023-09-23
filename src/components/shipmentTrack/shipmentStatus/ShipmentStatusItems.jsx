import { Box, Grid } from "@mui/material";
import React from "react";

function ShipmentStatusItems({ title, data, style, gap }) {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Box color="#777" sx={gap}>
        {title}
      </Box>
      <Box fontWeight="bold" style={style}>
        {data}
      </Box>
    </Grid>
  );
}

export default ShipmentStatusItems;
