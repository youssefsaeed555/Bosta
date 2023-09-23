import {
  Grid,
  Container,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import BoxSearch from "./BoxSearch";
import LANGUAGE from "../../shared/languages/language";
import ShipmentDetailsComponent from "./ShipmentDetails";
import ShipmentProblem from "./ShipmentProblem";
import DeliveryAddress from "./DeliveryAddress";
import ShipmentStatus from "./shipmentStatus/ShipmentStatus";
import shipmentDetails from "../../context/ShipmentDetails";
import { useParams } from "react-router-dom";
import BOSTA_API from "../../network/BostaApi";

function ShipmentTrack() {
  const [loader, setLoader] = useState(false);
  const [errors, setError] = useState(null);
  const { ShipmentDetails, setShipmentDetails } = useContext(shipmentDetails);
  const { trackingNum } = useParams();
  const {
    NETWORK_ERROR,
    NOT_FOUND,
    MAKE_SURE_OF_TRACKING_NUMBER,
    GENERAL_ERROR,
  } = LANGUAGE.ERRORS;

  useEffect(() => {
    if (trackingNum) {
      setLoader(true);
      const getShipmentDetails = async () => {
        try {
          const { data } = await BOSTA_API.get(
            `/shipments/track/${trackingNum}`
          );
          if (data) {
            console.log(data);
            setError(null);
            setShipmentDetails(data);
          }
        } catch (err) {
          if (err.message === "Network Error") {
            setError(NETWORK_ERROR);
          } else if (err.status === 404) {
            setError(NOT_FOUND + MAKE_SURE_OF_TRACKING_NUMBER);
          } else {
            setError(GENERAL_ERROR);
          }
        } finally {
          setLoader(false);
        }
      };
      getShipmentDetails();
    }
  }, [trackingNum]);

  return (
    <Box className="main-container">
      <Container maxWidth="sm" sx={{ fontWeight: "normal" }}>
        <BoxSearch
          title={LANGUAGE.SHIPMENT_TRACKING.TRACK_YOUR_SHIPMENT}
          variant="h5"
        />
      </Container>
      <Container maxWidth="lg">
        {loader ? (
          <Container maxWidth="xs" style={{ textAlign: "center" }}>
            <CircularProgress size={50} />
          </Container>
        ) : errors ? (
          <Typography textAlign="center">{errors}</Typography>
        ) : (
          Object.keys(ShipmentDetails) && (
            <>
              <ShipmentStatus />
              <Grid container spacing={4} style={{ paddingBottom: 70 }}>
                <Grid item xs={12} md={8}>
                  <ShipmentDetailsComponent
                    loader={loader}
                    setLoader={setLoader}
                    setError={setError}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <DeliveryAddress />
                  <ShipmentProblem />
                </Grid>
              </Grid>
            </>
          )
        )}
      </Container>
    </Box>
  );
}

export default ShipmentTrack;
