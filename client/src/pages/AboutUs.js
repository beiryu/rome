import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../styles/AboutUs.css';

const ContentSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  marginBottom: theme.spacing(4),
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: '8px',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const AboutUsPage = () => {
  return (
    <Box sx={{ marginBottom: 8 }}>
      <Box
        sx={{
          position: 'relative',
          height: {
            xs: '400px',
            md: '500px',
          },
          marginBottom: 8,
        }}
      >
        <section className="about-us" />
        <Box
          position="relative"
          height="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h1"
            component="h1"
            color="white"
            textAlign="center"
            sx={{
              fontWeight: 800,
              zIndex: 1,
              fontSize: { xs: '2.5rem', md: '4rem' },
              marginBottom: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            sx={{
              zIndex: 1,
              maxWidth: '800px',
              px: 3,
              opacity: 0.9,
            }}
          >
            Connecting talented educators with passionate learners
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ContentSection>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ mb: 3, fontWeight: 700 }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                We are committed to building a platform that effectively
                connects learners and teachers. With our team of experienced
                experts, we strive to deliver the best learning experience for
                everyone. Our platform enables seamless collaboration between
                students and educators, fostering an environment of growth and
                excellence.
              </Typography>
            </ContentSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentSection>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ mb: 3, fontWeight: 700 }}
              >
                Core Values
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Quality and reliability are our most important values. We
                believe that everyone deserves access to high-quality education
                and the opportunity for comprehensive personal development. Our
                commitment to excellence drives every decision we make.
              </Typography>
            </ContentSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentSection>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ mb: 3, fontWeight: 700 }}
              >
                Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                We aim to become the leading online education platform where
                everyone can easily access knowledge and develop their skills.
                With modern technology and a high-quality teaching staff, we are
                committed to delivering the best learning experience.
              </Typography>
            </ContentSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
