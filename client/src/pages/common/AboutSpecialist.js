import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContactForm from '../../components/user/ContactForm';
import '../../styles/AboutSpecialist.css';

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

const AboutSpecialistPage = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: { xs: '400px', md: '500px' },
          marginBottom: 8,
        }}
      >
        <section className='about-specialist' />
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
            Our Specialists
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
            Meet our team of certified fitness professionals
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
                sx={{
                  mb: 3,
                  fontWeight: 700,
                }}
              >
                Professional Excellence
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Our specialists are among the most qualified fitness
                professionals in the industry. Each trainer holds multiple
                certifications and undergoes continuous education to stay at the
                forefront of fitness science and training methodologies. We
                pride ourselves on maintaining the highest standards of
                professional excellence.
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
                Specialized Expertise
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Our team includes specialists in various fitness disciplines,
                from strength training and cardiovascular conditioning to
                rehabilitation and sports-specific training. This diverse
                expertise allows us to match you with the perfect trainer for
                your specific needs and goals.
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
                Client Success Focus
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
              >
                Our specialists are dedicated to your success. They work closely
                with each client, providing personalized attention and support
                throughout their fitness journey. We measure our success by the
                achievements and satisfaction of our clients.
              </Typography>
            </ContentSection>
          </Grid>
        </Grid>
        <ContactForm type='specialist' />
      </Container>
    </Box>
  );
};

export default AboutSpecialistPage;
