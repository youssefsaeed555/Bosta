import React, { useContext } from "react";
import { Container, Grid, Divider, Box } from "@mui/material";
import LANGUAGE from "../../../shared/languages/language";
import shipmentDetails from "../../../context/ShipmentDetails";
import moment from "moment";
import ShipmentStatusItems from "./ShipmentStatusItems";
import StatusBar from "./StatusBar";
import STATUS_COLORS from "../../../shared/statusColors";

function ShipmentStatus() {
  const { ShipmentDetails, setShipmentDetails } = useContext(shipmentDetails);
  const { AM, PM } = LANGUAGE.TIME_PERIOD;
  const sellerName = LANGUAGE.SHIPMENT_TRACKING.NOT_DETERMINED;

  function dateFormat(date) {
    return moment(date).format("DD/MM/YYYY");
  }
  const time = (date) =>
    moment(date).format(`hh:mm`) + " " + `${date.getHours() < 12 ? AM : PM}`;

  const lastDate = new Date(ShipmentDetails?.CurrentStatus?.timestamp);

  const promiseDate = ShipmentDetails?.PromisedDate
    ? dateFormat(new Date(ShipmentDetails?.PromisedDate))
    : LANGUAGE.SHIPMENT_TRACKING.NOT_DETERMINED;

  const lastUpdate = `${LANGUAGE.DAYS[lastDate.getDay()]} ${dateFormat(
    lastDate
  )} ${LANGUAGE.TIME_AT} ${time(lastDate)}`;

  return (
    <Container
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: 0,
        marginBottom: 50,
      }}
    >
      <Grid container sx={{ padding: "30px" }}>
        <ShipmentStatusItems
          title={`${LANGUAGE.SHIPMENT_TRACKING.TRACKING_NUMBER} ${ShipmentDetails?.TrackingNumber}`}
          data={LANGUAGE.SHIPMENT_STATE[ShipmentDetails?.CurrentStatus?.state]}
          style={{
            color: STATUS_COLORS[ShipmentDetails?.CurrentStatus?.state],
          }}
        />
        <ShipmentStatusItems
          title={LANGUAGE.SHIPMENT_TRACKING.LAST_UPDATE}
          data={lastUpdate}
        />
        <ShipmentStatusItems
          title={LANGUAGE.SHIPMENT_TRACKING.SELLER_NAME}
          data={sellerName}
        />
        <ShipmentStatusItems
          title={LANGUAGE.SHIPMENT_TRACKING.PROMISED_DATE}
          data={promiseDate}
        />
      </Grid>
      <Divider variant="fullWidth" />
      <StatusBar />
    </Container>
  );
}

export default ShipmentStatus;
