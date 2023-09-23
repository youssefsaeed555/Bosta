import React, { useContext } from "react";
import moment from "moment";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import LANGUAGE from "../../shared/languages/language";
import shipmentDetails from "../../context/ShipmentDetails";

function ShipmentDetails({ setError, setLoader }) {
  const { ShipmentDetails, setShipmentDetails } = useContext(shipmentDetails);
  const { SHIPMENT_DETAILS, BRANCH, DATE, TIME, DETAILS, NOT_DETERMINED } =
    LANGUAGE.SHIPMENT_TRACKING;
  const { AM, PM } = LANGUAGE.TIME_PERIOD;
  const lang = localStorage.getItem("userLanguage");
  const rowHeader = [BRANCH, DATE, TIME, DETAILS];

  const rows = ShipmentDetails.TransitEvents?.map((ele) => {
    const date = new Date(ele.timestamp);
    const time =
      moment(date).format(`hh:mm`) + " " + `${date.getHours() < 12 ? AM : PM}`;
    return {
      branch:
        lang == "ar"
          ? LANGUAGE.HUBS[ele.hub] || NOT_DETERMINED
          : ele.hub || NOT_DETERMINED,
      date: moment(date).format("DD/MM/YYYY"),
      time,
      details: LANGUAGE.SHIPMENT_STATE[ele.state],
    };
  });

  return (
    <>
      <Box sx={{ fontWeight: "bold", my: "5px" }}>{SHIPMENT_DETAILS}</Box>
      <TableContainer style={{ borderRadius: 4, border: "1px solid #f1f1f1" }}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#fafafa" }}>
            <TableRow>
              {rowHeader.map((content, i) => (
                <TableCell key={i} style={{ fontWeight: "bold" }}>
                  {content}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.values(row).map((value, i) => (
                  <TableCell key={i} style={{ fontWeight: "bold" }}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ShipmentDetails;
