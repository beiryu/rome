import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import ListingCard from "../components/ListingCard";

const MOCK_SPECIALIST_DATA = [
  {
    id: 1,
    name: "Dr. Sarah's Nutrition Consulting",
    description: "Professional nutrition and diet planning",
    price: "$80/session",
    rating: 4.9,
    image: require("../image/hero-specialistconsultation.jpeg"),
  },
  // Add more mock data as needed
];

const SpecialistListing = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Health Specialists
        </Typography>
        <Grid container spacing={3}>
          {MOCK_SPECIALIST_DATA.map((listing) => (
            <Grid item xs={12} sm={6} md={4} key={listing.id}>
              <ListingCard listing={listing} type="specialist" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SpecialistListing;
