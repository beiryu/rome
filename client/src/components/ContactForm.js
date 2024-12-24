import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
  Container,
} from '@mui/material';

const ContactForm = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const fitnessServices = [
    'Personal Training',
    'Group Fitness Classes',
    'Strength Training',
    'Cardio Training',
    'Yoga Sessions',
    'Custom Workout Plans',
  ];

  const specialistServices = [
    'Nutrition Consultation',
    'Diet Planning',
    'Health Assessment',
    'Wellness Coaching',
    'Rehabilitation Programs',
    'Sports Performance',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="md" sx={{ my: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: 'primary.main',
            mb: 4,
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              select
              label="Service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              {(type === 'fitness' ? fitnessServices : specialistServices).map(
                (service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm;
