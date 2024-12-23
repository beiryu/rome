import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

import FitnessListing from './pages/FitnessListing';
import SpecialistListing from './pages/SpecialistListing';
import FitnessDetail from './pages/FitnessDetail';
import SpecialistDetail from './pages/SpecialistDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
// import AboutUs from "./pages/AboutUs";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfUse from "./pages/TermsOfUse";

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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/" element={<Hero />} />
              <Route path="/fitness-listing" element={<FitnessListing />} />
              <Route path="/fitness-listing/:id" element={<FitnessDetail />} />
              <Route
                path="/specialist-listing"
                element={<SpecialistListing />}
              />
              <Route
                path="/specialist-listing/:id"
                element={<SpecialistDetail />}
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
