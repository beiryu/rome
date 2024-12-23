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
            padding: 4,
            borderRadius: 1,
          }}
        >
          <Typography
            variant="h1"
            className="hero-title"
            sx={{ color: "white", marginBottom: "2rem" }}
          >
            Search Fitness and Specialist Listing
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: 2,
              marginX: "auto",
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
                minWidth: "120px",
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
