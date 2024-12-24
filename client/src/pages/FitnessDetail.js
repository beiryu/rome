import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Rating,
} from '@mui/material';

const FitnessDetail = () => {
  const { id } = useParams();

  const fitnessData = {
    id,
    name: "John's Fitness Training",
    description: 'Expert personal training for all fitness levels',
    longDescription:
      "John's Fitness Training is a leading provider of personal training services. With over 10 years of experience, John has helped countless individuals achieve their fitness goals. Whether you're looking to build muscle, lose weight, or improve your overall health, John's Fitness Training can help you get there.",
    price: '$50/hour',
    rating: 4.8,
    image: require('../image/hero-fitness.jpeg'),
    specialties: ['Weight Training', 'HIIT', 'Yoga'],
    experience: '10+ years',
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            src={fitnessData.image}
            alt={fitnessData.name}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              mb: 3,
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            {fitnessData.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={fitnessData.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({fitnessData.rating})
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {fitnessData.longDescription}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Booking Information
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              {fitnessData.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
            >
              Book Now
            </Button>
            <Typography variant="subtitle1" gutterBottom>
              Specialties:
            </Typography>
            <Box sx={{ mb: 2 }}>
              {fitnessData.specialties.map((specialty, index) => (
                <Typography key={index} variant="body2">
                  • {specialty}
                </Typography>
              ))}
            </Box>
            <Typography variant="subtitle1">
              Experience: {fitnessData.experience}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FitnessDetail;
