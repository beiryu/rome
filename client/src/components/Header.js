import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import "../styles/Header.css";

const Header = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              FelizCity
            </Typography>
            <Typography
              component={Link}
              to="/fitness-listing"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              Fitness Listing
            </Typography>
            <Typography
              component={Link}
              to="/specialist-listing"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              Specialist Listing
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
