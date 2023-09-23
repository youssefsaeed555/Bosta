import { createContext, useState } from "react";

const shipmentDetails = createContext();

export function ShipmentDetailsProvider({ children }) {
  const [ShipmentDetails, setShipmentDetails] = useState([]);
  const valueShare = {
    ShipmentDetails,
    setShipmentDetails,
  };

  return (
    <shipmentDetails.Provider value={valueShare}>
      {children}
    </shipmentDetails.Provider>
  );
}

export default shipmentDetails;
