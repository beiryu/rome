import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth='xl'>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Typography variant='h6' gutterBottom sx={{ mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1.5} alignItems='center'>
              <Link href='/about-us' color='inherit' underline='hover'>
                About Us
              </Link>
              <Link href='/privacy-policy' color='inherit' underline='hover'>
                Privacy Policy
              </Link>
              <Link href='/terms-of-use' color='inherit' underline='hover'>
                Terms of Use
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Typography variant='h6' gutterBottom sx={{ mb: 2 }}>
              Portfolio
            </Typography>
            <Stack spacing={1.5} alignItems='center'>
              <Link href='/about-fitness' color='inherit' underline='hover'>
                About Fitness
              </Link>
              <Link href='/about-specialist' color='inherit' underline='hover'>
                About Specialist
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Typography variant='h6' gutterBottom sx={{ mb: 2 }}>
              Social Media
            </Typography>
            <Stack spacing={1.5} alignItems='center'>
              <Link
                href='https://www.youtube.com/channel/UC2Z4hZ2w6OXY__vUC18IY9Q'
                color='inherit'
                underline='hover'
              >
                Youtube
              </Link>
              <Link
                href='https://cswdesmondcsw.wixsite.com/innovation-product'
                color='inherit'
                underline='hover'
              >
                Blog
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant='body2'
          align='center'
          sx={{
            mt: 6,
            pb: 1,
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          © 2024 FelizCity All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
