import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  Avatar,
} from '@mui/material';
import {
  Person,
  FitnessCenter,
  Psychology,
  Message,
} from '@mui/icons-material';
import UserProfile from '../../components/user-dashboard/UserProfile';
import UserMessages from '../../components/user-dashboard/UserMessages';
import FitnessBookings from '../../components/user-dashboard/FitnessBookings';
import SpecialistBookings from '../../components/user-dashboard/SpecialistBookings';
import useAuthStore from '../../store/useAuthStore';

const UserDashboard = () => {
  const { user } = useAuthStore();

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <UserProfile />;
      case 1:
        return <UserMessages />;
      case 2:
        return <FitnessBookings />;
      case 3:
        return <SpecialistBookings />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          {/* User Info Header */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main' }}>
                  {user.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant='h5' sx={{ fontWeight: 600 }}>
                    {user.name}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    {user.email}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Navigation Tabs */}
          <Grid item xs={12}>
            <Paper sx={{ mb: 3 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant='scrollable'
                scrollButtons='auto'
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab icon={<Person />} label='Profile' />
                <Tab icon={<Message />} label='Messages' />
                <Tab icon={<FitnessCenter />} label='Fitness' />
                <Tab icon={<Psychology />} label='Specialist' />
              </Tabs>
            </Paper>
          </Grid>

          {/* Content Area */}
          <Grid item xs={12}>
            {renderContent()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UserDashboard;
