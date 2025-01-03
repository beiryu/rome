/* eslint-disable quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import Header from './components/user/Header';
import Footer from './components/user/Footer';
import Hero from './components/user/Hero';
import ProtectedRoute from './components/auth/ProtectedRoute';

import FitnessListingPage from './pages/user/FitnessListing';
import SpecialistListingPage from './pages/user/SpecialistListing';
import FitnessDetailPage from './pages/user/FitnessDetail';
import SpecialistDetailPage from './pages/user/SpecialistDetail';
import LoginPage from './pages/user/Login';
import RegisterPage from './pages/user/Register';
import ForgotPasswordPage from './pages/user/ForgotPassword';
import AboutUsPage from './pages/user/AboutUs';
import PrivacyPolicyPage from './pages/user/PrivacyPolicy';
import TermsOfUsePage from './pages/user/TermsOfUse';
import AboutFitnessPage from './pages/user/AboutFitness';
import AboutSpecialistPage from './pages/user/AboutSpecialist';
import UserDashboard from './pages/user-dashboard/UserDashboard';

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
        <div className='App'>
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
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/forgot-password' element={<ForgotPasswordPage />} />
              <Route path='/' element={<Hero />} />
              <Route
                path='/dashboard'
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path='/fitness-listing' element={<FitnessListingPage />} />
              <Route
                path='/fitness-listing/:id'
                element={<FitnessDetailPage />}
              />
              <Route
                path='/specialist-listing'
                element={<SpecialistListingPage />}
              />
              <Route
                path='/specialist-listing/:id'
                element={<SpecialistDetailPage />}
              />
              <Route path='/about-us' element={<AboutUsPage />} />
              <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
              <Route path='/terms-of-use' element={<TermsOfUsePage />} />
              <Route path='/about-fitness' element={<AboutFitnessPage />} />
              <Route
                path='/about-specialist'
                element={<AboutSpecialistPage />}
              />
            </Routes>
            <Footer />
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
