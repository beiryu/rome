import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import fitnessImage from '../../image/hero-fitness.jpeg';

const FitnessPostings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data - replace with API calls
  const mockPostings = [
    {
      id: 1,
      title: 'John Fitness Training',
      description: 'Expert personal training for all fitness levels',
      price: '$50/hour',
      status: 'active',
      image: fitnessImage,
      trainer: 'John Smith',
      category: 'Personal Training',
      bookings: 12,
    },
    {
      id: 2,
      title: 'Group Yoga Class',
      description: 'Relaxing yoga sessions for beginners to advanced',
      price: '$25/session',
      status: 'draft',
      image: fitnessImage,
      trainer: 'Sarah Johnson',
      category: 'Yoga',
      bookings: 8,
    },
    {
      id: 3,
      title: 'HIIT Workout',
      description: 'High-intensity interval training for maximum results',
      price: '$40/session',
      status: 'active',
      image: fitnessImage,
      trainer: 'Mike Wilson',
      category: 'HIIT',
      bookings: 15,
    },
  ];

  const filteredPostings = mockPostings
    .filter((posting) =>
      posting.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((posting) =>
      filterStatus === 'all' ? true : posting.status === filterStatus
    );

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'draft':
        return 'warning';
      case 'archived':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Search and Filter */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder='Search postings...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              label='Status Filter'
            >
              <MenuItem value='all'>All Status</MenuItem>
              <MenuItem value='active'>Active</MenuItem>
              <MenuItem value='draft'>Draft</MenuItem>
              <MenuItem value='archived'>Archived</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {/* Postings Grid */}
      <Grid container spacing={3}>
        {filteredPostings.map((posting) => (
          <Grid item xs={12} md={6} lg={4} key={posting.id}>
            <Card>
              <CardMedia
                component='img'
                height='200'
                image={posting.image}
                alt={posting.title}
              />
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={posting.status.toUpperCase()}
                    color={getStatusColor(posting.status)}
                    size='small'
                    sx={{ mb: 1 }}
                  />
                  <Typography variant='h6' gutterBottom>
                    {posting.title}
                  </Typography>
                  <Typography color='text.secondary' gutterBottom>
                    {posting.trainer} • {posting.category}
                  </Typography>
                </Box>

                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {posting.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='h6' color='primary'>
                    {posting.price}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {posting.bookings} bookings
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FitnessPostings;
