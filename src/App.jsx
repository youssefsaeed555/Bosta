import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import LANGUAGE from "./shared/languages/language";
import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import ShipmentTrack from "./components/shipmentTrack/ShipmentTrack";
import BoxSearch from "./components/shipmentTrack/BoxSearch";
import { ShipmentDetailsProvider } from "./context/ShipmentDetails";
const lang = localStorage.getItem("userLanguage");

function App() {
  return (
    <ShipmentDetailsProvider>
      <BrowserRouter>
        <Box sx={{ direction: `${lang == "ar" ? "rtl" : "ltr"}` }}>
          <Navbar language={LANGUAGE.language}></Navbar>
          <Routes>
            <Route
              path="/*"
              element={
                <Container maxWidth="sm">
                  <BoxSearch />
                </Container>
              }
            />
            <Route
              path="/tracking-shipment/:trackingNum?"
              exact
              element={<ShipmentTrack />}
            />
            {/* Add other routes here */}
          </Routes>
        </Box>
      </BrowserRouter>
    </ShipmentDetailsProvider>
  );
}

export default App;
