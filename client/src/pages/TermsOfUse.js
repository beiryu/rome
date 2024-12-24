import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContentSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(4),
}));

const TermsAndServices = () => {
  return (
    <Box>
      <HeaderBox>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            color="white"
            textAlign="center"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Terms of Use
          </Typography>
        </Container>
      </HeaderBox>

      <Container maxWidth="lg">
        <ContentSection>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Agreement to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing or using our platform, you agree to be bound by these
            Terms of Service. If you disagree with any part of the terms, you
            may not access the service. We reserve the right to modify these
            terms at any time, and we'll always post the most current version on
            our website.
          </Typography>
        </ContentSection>

        <ContentSection>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            User Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            Users are responsible for maintaining the confidentiality of their
            account and password. You agree to accept responsibility for all
            activities that occur under your account. You must notify us
            immediately of any unauthorized use of your account or any other
            security breach.
          </Typography>
        </ContentSection>

        <ContentSection>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            The service and its original content, features, and functionality
            are and will remain the exclusive property of our platform and its
            licensors. Our platform is protected by copyright, trademark, and
            other laws. Our trademarks may not be used in connection with any
            product or service without our prior written consent.
          </Typography>
        </ContentSection>
      </Container>
    </Box>
  );
};

export default TermsAndServices;
