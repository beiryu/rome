/* eslint-disable quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

// Auth
import ProtectedRoute from './components/auth/ProtectedRoute';

// Common pages
import Hero from './components/common/Hero';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AboutUs from './pages/common/AboutUs';
import PrivacyPolicy from './pages/common/PrivacyPolicy';
import TermsOfUse from './pages/common/TermsOfUse';
import AboutFitness from './pages/common/AboutFitness';
import AboutSpecialist from './pages/common/AboutSpecialist';

// User pages
import UserLoginForm from './components/user/LoginForm';
import UserRegisterForm from './components/user/RegisterForm';
import UserForgotPasswordForm from './components/user/ForgotPasswordForm';
import UserDashboard from './pages/user/Dashboard';
import UserFitnessListing from './pages/user/FitnessListing';
import UserFitnessDetail from './pages/user/FitnessDetail';
import UserSpecialistListing from './pages/user/SpecialistListing';
import UserSpecialistDetail from './pages/user/SpecialistDetail';

// Staff pages
import StaffLoginForm from './components/staff/LoginForm';
import StaffRegisterForm from './components/staff/RegisterForm';
import StaffForgotPasswordForm from './components/staff/ForgotPasswordForm';
import StaffDashboard from './pages/staff/Dashboard';
import StaffFitnessListing from './pages/staff/FitnessListing';
import StaffFitnessDetail from './pages/staff/FitnessDetail';
import StaffSpecialistListing from './pages/staff/SpecialistListing';
import StaffSpecialistDetail from './pages/staff/SpecialistDetail';

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              {/* Public routes */}
              <Route path='/' element={<Hero />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/terms-of-use' element={<TermsOfUse />} />
              <Route path='/about-fitness' element={<AboutFitness />} />
              <Route path='/about-specialist' element={<AboutSpecialist />} />
              <Route path='/login' element={<UserLoginForm />} />
              <Route path='/register' element={<UserRegisterForm />} />
              <Route
                path='/forgot-password'
                element={<UserForgotPasswordForm />}
              />
              <Route path='/staff/login' element={<StaffLoginForm />} />
              <Route path='/staff/register' element={<StaffRegisterForm />} />
              <Route
                path='/staff/forgot-password'
                element={<StaffForgotPasswordForm />}
              />
              {/* Protected user routes */}
              <Route
                path='/dashboard'
                element={
                  <ProtectedRoute allowedRoles={['user']}>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/fitness-listing'
                element={
                  <ProtectedRoute allowedRoles={['user']}>
                    <UserFitnessListing />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/fitness-listing/:id'
                element={
                  <ProtectedRoute allowedRoles={['user']}>
                    <UserFitnessDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/specialist-listing'
                element={
                  <ProtectedRoute allowedRoles={['user']}>
                    <UserSpecialistListing />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/specialist-listing/:id'
                element={
                  <ProtectedRoute allowedRoles={['user']}>
                    <UserSpecialistDetail />
                  </ProtectedRoute>
                }
              />

              {/* Protected staff routes */}
              <Route
                path='/staff/dashboard'
                element={
                  <ProtectedRoute allowedRoles={['staff']}>
                    <StaffDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/staff/fitness-listing'
                element={
                  <ProtectedRoute allowedRoles={['staff']}>
                    <StaffFitnessListing />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/staff/fitness-listing/:id'
                element={
                  <ProtectedRoute allowedRoles={['staff']}>
                    <StaffFitnessDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/staff/specialist-listing'
                element={
                  <ProtectedRoute allowedRoles={['staff']}>
                    <StaffSpecialistListing />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/staff/specialist-listing/:id'
                element={
                  <ProtectedRoute allowedRoles={['staff']}>
                    <StaffSpecialistDetail />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
