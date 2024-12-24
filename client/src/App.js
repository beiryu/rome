import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

import FitnessListingPage from './pages/FitnessListing';
import SpecialistListingPage from './pages/SpecialistListing';
import FitnessDetailPage from './pages/FitnessDetail';
import SpecialistDetailPage from './pages/SpecialistDetail';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPasswordPage from './pages/ForgotPassword';
import AboutUsPage from './pages/AboutUs';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfUsePage from './pages/TermsOfUse';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f1f1f',
    },
    secondary: {
      main: '#1f1f1f',
    },
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Box
            sx={{
              paddingTop: '64px',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/" element={<Hero />} />
              <Route path="/fitness-listing" element={<FitnessListingPage />} />
              <Route
                path="/fitness-listing/:id"
                element={<FitnessDetailPage />}
              />
              <Route
                path="/specialist-listing"
                element={<SpecialistListingPage />}
              />
              <Route
                path="/specialist-listing/:id"
                element={<SpecialistDetailPage />}
              />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            </Routes>
            <Footer />
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
