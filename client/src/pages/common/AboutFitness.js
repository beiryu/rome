import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactForm from '../../components/user/ContactForm';
import '../../styles/AboutFitness.css';

const ContentSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  marginBottom: theme.spacing(4),
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.05)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const AboutFitnessPage = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: { xs: '400px', md: '500px' },
          marginBottom: 8,
        }}
      >
        <section className='about-fitness' />
        <Box
          position='relative'
          height='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Typography
            variant='h1'
            component='h1'
            color='white'
            textAlign='center'
            sx={{
              fontWeight: 800,
              zIndex: 1,
              fontSize: { xs: '2.5rem', md: '4rem' },
              marginBottom: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Fitness Journey
          </Typography>
          <Typography
            variant='h5'
            color='white'
            textAlign='center'
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
      </Box>

      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ContentSection>
              <Typography
                variant='h5'
                gutterBottom
                sx={{ mb: 3, fontWeight: 700 }}
              >
                Personalized Training
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Our fitness programs are tailored to your individual needs and
                goals. Whether you&apos;re just starting your fitness journey or
                looking to reach new heights, our experienced trainers will
                create a customized plan that works for you. We focus on
                sustainable progress and long-term results.
              </Typography>
            </ContentSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentSection>
              <Typography
                variant='h5'
                gutterBottom
                sx={{ mb: 3, fontWeight: 700 }}
              >
                Expert Guidance
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Our fitness professionals bring years of experience and
                expertise to every session. They stay up-to-date with the latest
                training methodologies and nutrition science to provide you with
                the most effective guidance for your fitness goals.
              </Typography>
            </ContentSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentSection>
              <Typography
                variant='h5'
                gutterBottom
                sx={{ mb: 3, fontWeight: 700 }}
              >
                Comprehensive Support
              </Typography>
              <Typography
                variant='body1'
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
        <ContactForm type='fitness' />
      </Container>
    </Box>
  );
};

export default AboutFitnessPage;
