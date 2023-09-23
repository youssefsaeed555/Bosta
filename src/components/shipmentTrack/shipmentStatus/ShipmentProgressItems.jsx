import { Container, Grid, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useContext, useEffect, useState } from "react";
import LANGUAGE from "../../../shared/languages/language";
import shipmentDetails from "../../../context/ShipmentDetails";
import STATUS_COLORS from "../../../shared/statusColors";
function ShipmentProgressItems({ hasFirst, state }) {
  //state
  const { ShipmentDetails, setShipmentDetails } = useContext(shipmentDetails);
  const [toColored, setToColored] = useState([]);
  const [barBgColor, setBarBgColor] = useState("");

  const [generalBgColor, setGeneralBgColor] = useState(
    STATUS_COLORS[
      ShipmentDetails?.TransitEvents?.[
        ShipmentDetails?.TransitEvents?.length - 1
      ]?.state
    ]
  );

  const dir = LANGUAGE.language === "ar" ? "left" : "right";

  useEffect(() => {
    const states = ShipmentDetails?.TransitEvents?.map(({ state }) => state);
    if (states) {
      setGeneralBgColor(STATUS_COLORS[states[states?.length - 1]]);
      setToColored(states);
      setBarBgColor(STATUS_COLORS[states[states?.length - 1]]);
    }
  }, [ShipmentDetails?.TrackingNumber]);

  return (
    <Grid item xs={4}>
      <Box
        style={{
          display: "grid",
          alignItems: "center",
          position: "relative",
        }}
      >
        {hasFirst && (
          <CheckCircleIcon
            style={{
              color: "white",
              position: "absolute",
              borderRadius: "50%",
              backgroundColor: generalBgColor,
            }}
          />
        )}
        <Box
          style={{
            height: 8,
            backgroundColor: `${
              toColored.includes(state) ? barBgColor : "#eee"
            } `,
          }}
        />
        {toColored.includes(state) ? (
          <CheckCircleIcon
            style={{
              color: generalBgColor,
              position: "absolute",
              [dir]: -19,
            }}
          />
        ) : (
          <CircleIcon
            style={{ color: "#eee", position: "absolute", [dir]: -19 }}
          />
        )}
      </Box>
    </Grid>
  );
}

export default ShipmentProgressItems;
