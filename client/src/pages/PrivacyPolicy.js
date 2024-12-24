import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContentSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const PrivacyPolicyPage = () => {
  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)' }}>
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
          padding: 8,
          marginBottom: 4,
        }}
      >
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
            Privacy Policy
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <ContentSection>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Information Collection and Use
          </Typography>
          <Typography variant="body1" paragraph>
            We collect several different types of information for various
            purposes to provide and improve our service to you. While using our
            service, we may ask you to provide us with certain personally
            identifiable information that can be used to contact or identify
            you.
          </Typography>
        </ContentSection>

        <ContentSection>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Data Protection
          </Typography>
          <Typography variant="body1" paragraph>
            The security of your data is important to us. We implement
            appropriate security measures to protect your personal information.
            However, remember that no method of transmission over the Internet
            or method of electronic storage is 100% secure.
          </Typography>
        </ContentSection>

        <ContentSection>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, update, or delete your personal
            information at any time. You can exercise these rights by contacting
            us through the contact information provided on our website. We will
            respond to your request within a reasonable timeframe.
          </Typography>
        </ContentSection>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
