import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Grid,
  Divider,
  Hidden,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "./navbar.css";
import LANGUAGE from "../../shared/languages/language";

function ResponsiveAppBar({ language }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [bostaLogo, setBostaLogo] = useState("");
  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-red-600 text-xl flex justify-center items-center p-1 rounded mx-5 text-white"
      : "navbar-item navbar-link navbar-item-text";

  const { MAIN, PRICES, CALL_SALES, SHIPMENT_TRACK, LOGIN } = LANGUAGE.MENU;

  const handleLanguageChange = () => {
    if (LANGUAGE.language === "ar") {
      localStorage.setItem("userLanguage", "en");
    } else if (LANGUAGE.language === "en") {
      localStorage.setItem("userLanguage", "ar");
    }
    window.location.reload();
  };

  useEffect(() => {
    import(`../../assets/images/bosta_logo_${language || "en"}.svg`).then(
      (res) => {
        setBostaLogo(res.default);
      }
    );
  }, []);

  const handleMenuIconClick = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    {
      title: MAIN,
      link: "/",
    },
    {
      title: PRICES,
      link: "/prices",
    },
    {
      title: CALL_SALES,
      link: "/call-sales",
    },
    {
      title: SHIPMENT_TRACK,
      link: "/tracking-shipment",
    },
    {
      title: LOGIN,
      link: "/login",
    },
    {
      title: LANGUAGE.language === "ar" ? "ENG" : "عربي",
      onClick: handleLanguageChange,
    },
  ];

  return (
    <AppBar position="relative" className="navbar">
      <Box style={{ borderBottom: "1px solid #ccc" }}>
        <Grid
          container
          maxWidth="lg"
          sx={{ margin: "auto", alignItems: "center" }}
        >
          <Grid item sx={{ justifyContent: "flex-start" }} xs={8} md={1}>
            <Link to="/" className="navbar-item cursor-pointer">
              <img className="navbar-logo w-32 " src={bostaLogo} alt="logo" />
            </Link>
          </Grid>
          <Hidden mdDown>
            <Grid container justifyContent="center" item md={5}>
              <NavLink className={activeLink} to="/">
                {MAIN}
              </NavLink>
              <NavLink className={activeLink} to="/prices">
                {PRICES}
              </NavLink>
              <NavLink className={activeLink} to="/call-sales">
                {CALL_SALES}
              </NavLink>
            </Grid>
            <Grid container justifyContent="flex-end" item md={6}>
              <NavLink className={activeLink} to="/tracking-shipment">
                {SHIPMENT_TRACK}
              </NavLink>
              <Divider orientation="vertical" flexItem />
              <NavLink className={activeLink} to="/login">
                {LOGIN}
              </NavLink>
              <Box
                className="navbar-item navbar-link navbar-language"
                onClick={handleLanguageChange}
              >
                {LANGUAGE.language === "ar" ? "ENG" : "عربي"}
              </Box>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container justifyContent="flex-end" item xs={4}>
              <IconButton
                aria-label="menu"
                size="large"
                className="navbar-menu-icon"
                onClick={handleMenuIconClick}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
      <Hidden mdUp>
        {openMenu && (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {menuItems.map((ele, index) => (
              <Box key={index} sx={{ padding: "10px" }}>
                {ele.onClick ? (
                  <Box
                    className="navbar-link navbar-language"
                    onClick={ele.onClick}
                    sx={{ padding: "0 25px" }}
                  >
                    {ele.title}
                  </Box>
                ) : (
                  <>
                    <NavLink
                      className={`navbar-item navbar-link navbar-item-text ${
                        index === menuItems.length - 1 ? "text-red-600" : ""
                      }`}
                      to={ele.link}
                    >
                      {ele.title}
                    </NavLink>
                    <Divider sx={{ pt: "5px" }} />
                  </>
                )}
              </Box>
            ))}
          </Paper>
        )}
      </Hidden>
    </AppBar>
  );
}
export default ResponsiveAppBar;
