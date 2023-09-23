import React, { useState } from "react";
import { Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import LANGUAGE from "../../shared/languages/language";

function BoxSearch({ title }) {
  const [error, setError] = useState(null);
  const [trackingNum, setTrackingNum] = useState("");
  const navigate = useNavigate();
  const { EMPTY_FIELD_ERROR } = LANGUAGE.ERRORS;
  const handleChange = (e) => {
    const value = e.target.valueAsNumber;
    if (+value) {
      setTrackingNum(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNum) {
      navigate(`/tracking-shipment/${trackingNum}`);
    } else {
      setError(EMPTY_FIELD_ERROR);
    }
  };

  return (
    <Paper style={{ margin: "40px 0", padding: "30px 15px" }}>
      <Typography variant="h4" color="red">
        {title}
      </Typography>
      <Typography variant="h6">
        {LANGUAGE.SHIPMENT_TRACKING.WRITE_SHIPMENT_NUMBER_AND_TRACK_IT}
      </Typography>
      <form onSubmit={handleSubmit} style={{ margin: "10px 0" }}>
        <Grid container>
          <Grid item xs={9} sm={6}>
            <TextField
              label={LANGUAGE.SHIPMENT_TRACKING.TRACKING_NUMBER}
              variant="outlined"
              size="small"
              value={trackingNum}
              onChange={handleChange}
              type="number"
              error={Boolean(error)}
              helperText={error || " "}
              fullWidth
            />
          </Grid>
          <Grid item xs={3} sm={6}>
            <IconButton
              type="submit"
              style={{
                backgroundColor: "red",
                color: "white",
                margin: "0 30px",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default BoxSearch;
