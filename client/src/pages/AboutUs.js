import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    height: '400px',
  },
}));

const HeroImage = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${'../image/hero-aboutus.jpeg'})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
  },
});

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

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: 0,
    width: '60px',
    height: '4px',
    backgroundColor: '#14a800',
    borderRadius: '2px',
  },
}));

const AboutUsPage = () => {
  return (
    <Box>
      <HeroWrapper>
        <HeroImage />
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
              fontWeight: 700,
              zIndex: 1,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              marginBottom: 2,
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
      </HeroWrapper>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ContentSection>
              <StyledTypography
                variant="h4"
                gutterBottom
                sx={{ color: '#14a800', mb: 4 }}
              >
                Our Mission
              </StyledTypography>
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
              <StyledTypography
                variant="h4"
                gutterBottom
                sx={{ color: '#14a800', mb: 4 }}
              >
                Core Values
              </StyledTypography>
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
              <StyledTypography
                variant="h4"
                gutterBottom
                sx={{ color: '#14a800', mb: 4 }}
              >
                Vision
              </StyledTypography>
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
