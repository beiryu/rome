import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import aboutFitnessImage from '../assets/about-fitness-hero.jpg';

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
  backgroundImage: `url(${aboutFitnessImage})`,
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

const HeroAboutFitness = () => {
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
            Fitness Journey
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
            Transform your life with expert fitness guidance
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
                Personalized Training
              </StyledTypography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Our fitness programs are tailored to your individual needs and
                goals. Whether you're just starting your fitness journey or
                looking to reach new heights, our experienced trainers will
                create a customized plan that works for you. We focus on
                sustainable progress and long-term results.
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
                Expert Guidance
              </StyledTypography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Our certified fitness professionals bring years of experience
                and expertise to every session. They stay up-to-date with the
                latest training methodologies and nutrition science to provide
                you with the most effective guidance for your fitness goals.
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
                Comprehensive Support
              </StyledTypography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Beyond just workouts, we provide comprehensive support including
                nutrition guidance, progress tracking, and lifestyle coaching.
                Our holistic approach ensures you have all the tools and support
                needed to achieve your fitness goals.
              </Typography>
            </ContentSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroAboutFitness;
