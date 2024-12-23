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

const SpecialistDetail = () => {
  const { id } = useParams();

  const specialistData = {
    id,
    name: "Dr. Sarah's Nutrition Consulting",
    description: 'Professional nutrition and diet planning',
    longDescription:
      "Dr. Sarah's Nutrition Consulting provides expert guidance in nutrition and diet planning. With a focus on sustainable eating habits and personalized meal plans, Dr. Sarah helps clients achieve their health goals through evidence-based nutrition strategies.",
    price: '$80/session',
    rating: 4.9,
    image: require('../image/hero-specialistconsultation.jpeg'),
    specialties: ['Nutrition Planning', 'Diet Consultation', 'Meal Planning'],
    experience: '15+ years',
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            src={specialistData.image}
            alt={specialistData.name}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              mb: 3,
            }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            {specialistData.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={specialistData.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({specialistData.rating})
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {specialistData.longDescription}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Booking Information
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              {specialistData.price}
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
              {specialistData.specialties.map((specialty, index) => (
                <Typography key={index} variant="body2">
                  • {specialty}
                </Typography>
              ))}
            </Box>
            <Typography variant="subtitle1">
              Experience: {specialistData.experience}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpecialistDetail;
