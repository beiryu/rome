import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import '../styles/Header.css';

const Header = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Container
          maxWidth="xl"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            FelizCity
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2, marginLeft: 4 }}>
            <Typography
              component={Link}
              to="/fitness-listing"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Fitness
            </Typography>
            <Typography
              component={Link}
              to="/specialist-listing"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Specialist
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Sign Up
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
