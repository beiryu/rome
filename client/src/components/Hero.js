import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container maxWidth="lg">
        <Box
          className="hero-content"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            width: {
              xs: "95%",
              sm: "85%",
              md: "70%",
            },
            margin: "0 auto",
            borderRadius: 1,
          }}
        >
          <Typography
            variant="h1"
            className="hero-title"
            sx={{
              color: "white",
              marginBottom: "2rem",
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
              },
            }}
          >
            Search Fitness and Specialist Listing
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              backgroundColor: "#fff",
              padding: {
                xs: "0.5rem",
                sm: "1rem",
              },
              borderRadius: 2,
            }}
          >
            <TextField
              fullWidth
              placeholder="Search for fitness trainers or specialists..."
              variant="outlined"
              sx={{ backgroundColor: "#f2f2f2" }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                minWidth: {
                  xs: "100px",
                  sm: "120px",
                },
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
