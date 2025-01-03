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
  Search,
  Add,
} from '@mui/icons-material';
import useAuthStore from '../../stores/useAuthStore';
import StaffProfile from '../../components/staff/StaffProfile';
import FitnessPostings from '../../components/staff/FitnessPostings';
import SpecialistPostings from '../../components/staff/SpecialistPostings';
import UserSearch from '../../components/staff/UserSearch';
import StaffMessages from '../../components/staff/StaffMessages';
import CreateFitnessPosting from '../../components/staff/CreateFitnessPosting';
import CreateSpecialistPosting from '../../components/staff/CreateSpecialistPosting';

const StaffDashboardPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useAuthStore();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <StaffProfile />;
      case 1:
        return <FitnessPostings />;
      case 2:
        return <CreateFitnessPosting />;
      case 3:
        return <SpecialistPostings />;
      case 4:
        return <CreateSpecialistPosting />;
      case 5:
        return <UserSearch />;
      case 6:
        return <StaffMessages />;
      default:
        return <StaffProfile />;
    }
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          {/* Staff Info Header */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  sx={{ width: 64, height: 64, bgcolor: 'secondary.main' }}
                >
                  {user?.name?.charAt(0) || 'S'}
                </Avatar>
                <Box>
                  <Typography variant='h5' sx={{ fontWeight: 600 }}>
                    {user?.name || 'Staff Member'}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    {user?.email}
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
                <Tab icon={<FitnessCenter />} label='Fitness Postings' />
                <Tab icon={<Add />} label='Create Fitness' />
                <Tab icon={<Psychology />} label='Specialist Postings' />
                <Tab icon={<Add />} label='Create Specialist' />
                <Tab icon={<Search />} label='User Search' />
                <Tab icon={<Message />} label='Messages' />
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

export default StaffDashboardPage;
