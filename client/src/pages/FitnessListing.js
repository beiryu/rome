import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ListingCard from '../components/ListingCard';

const MOCK_FITNESS_DATA = [
  {
    id: 1,
    name: "John's Fitness Training",
    description: 'Expert personal training for all fitness levels',
    price: '$50/hour',
    rating: 4.8,
    image: require('../image/hero-fitness.jpeg'),
  },
];

const FitnessListing = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Fitness Trainers
        </Typography>
        <Grid container spacing={3}>
          {MOCK_FITNESS_DATA.map((listing) => (
            <Grid item xs={12} sm={6} md={4} key={listing.id}>
              <ListingCard listing={listing} type="fitness" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FitnessListing;
