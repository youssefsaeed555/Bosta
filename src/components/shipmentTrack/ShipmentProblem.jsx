import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import LANGUAGE from "../../shared/languages/language";
import haveProblem from "../../assets/images/haveProblem.png";

function ShipmentProblem() {
  const { SHIPMENT_TRACKING } = LANGUAGE;
  return (
    <Paper
      sx={{
        border: "1px solid #ccc",
        mt: "10px",
        padding: "10px 15px",
      }}
    >
      <Grid container item>
        <Grid item xs={4} sx={{ padding: "10px" }}>
          <img src={haveProblem} alt="have problem" className="w-full" />
        </Grid>
        <Grid item xs={8} sx={{ padding: "10px" }}>
          {SHIPMENT_TRACKING.HAVE_PROBLEM}
          <Button
            fullWidth
            sx={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "10px",
              marginTop: "15px",
            }}
          >
            {SHIPMENT_TRACKING.REPORT_PROBLEM}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ShipmentProblem;
