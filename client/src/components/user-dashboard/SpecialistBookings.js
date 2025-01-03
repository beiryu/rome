import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
  Avatar,
} from '@mui/material';
import {
  Event,
  AccessTime,
  Cancel,
  Schedule,
  VideoCall,
} from '@mui/icons-material';

const SpecialistBookings = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [ratingDialogOpen, setRatingDialogOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  // Mock bookings data
  const bookings = [
    {
      id: 1,
      title: 'Nutrition Consultation',
      specialist: 'Dr. Sarah Wilson',
      specialization: 'Nutritionist',
      date: '2024-01-22',
      time: '11:00 AM',
      status: 'upcoming',
      price: '$80',
      image: 'SW',
    },
    {
      id: 2,
      title: 'Physical Therapy Session',
      specialist: 'Dr. Michael Brown',
      specialization: 'Physical Therapist',
      date: '2024-01-19',
      time: '3:00 PM',
      status: 'completed',
      price: '$100',
      image: 'MB',
    },
    {
      id: 3,
      title: 'Mental Wellness Check',
      specialist: 'Dr. Emily Chen',
      specialization: 'Psychologist',
      date: '2024-01-25',
      time: '2:30 PM',
      status: 'cancelled',
      price: '$120',
      image: 'EC',
    },
  ];

  const handleCancelBooking = (bookingId) => {
    // eslint-disable-next-line no-console
    console.log('Canceling booking:', bookingId);
  };

  const handleRescheduleBooking = (booking) => {
    // eslint-disable-next-line no-console
    console.log('Rescheduling booking:', booking);
  };

  const handleJoinCall = (booking) => {
    // eslint-disable-next-line no-console
    console.log('Joining video call for booking:', booking);
  };

  const handleRateSession = (booking) => {
    setSelectedBooking(booking);
    setRatingDialogOpen(true);
  };

  const handleSubmitRating = () => {
    // eslint-disable-next-line no-console
    console.log('Submitting rating:', {
      bookingId: selectedBooking.id,
      rating,
      review,
    });
    setRatingDialogOpen(false);
    setRating(0);
    setReview('');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'primary';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant='h5' sx={{ fontWeight: 600, mb: 3 }}>
          Specialist Consultations
        </Typography>
        <Grid container spacing={3}>
          {bookings.map((booking) => (
            <Grid item xs={12} md={6} lg={4} key={booking.id}>
              <Card>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={booking.status.toUpperCase()}
                      color={getStatusColor(booking.status)}
                      size='small'
                      sx={{ mb: 1 }}
                    />
                    <Typography variant='h6' gutterBottom>
                      {booking.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32 }}>
                        {booking.image}
                      </Avatar>
                      <Box>
                        <Typography color='text.secondary'>
                          {booking.specialist}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {booking.specialization}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Event sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant='body2'>
                      {new Date(booking.date).toLocaleDateString()}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTime sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant='body2'>{booking.time}</Typography>
                  </Box>

                  <Typography variant='h6' color='primary' sx={{ mt: 2 }}>
                    {booking.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                  {booking.status === 'upcoming' && (
                    <>
                      {booking.location === 'Video Call' && (
                        <Button
                          startIcon={<VideoCall />}
                          color='primary'
                          onClick={() => handleJoinCall(booking)}
                        >
                          Join Call
                        </Button>
                      )}
                      <Button
                        startIcon={<Schedule />}
                        onClick={() => handleRescheduleBooking(booking)}
                      >
                        Reschedule
                      </Button>
                      <Button
                        startIcon={<Cancel />}
                        color='error'
                        onClick={() => handleCancelBooking(booking.id)}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                  {booking.status === 'completed' && !booking.rating && (
                    <Button
                      onClick={() => handleRateSession(booking)}
                      color='primary'
                    >
                      Rate Session
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Rating Dialog */}
      <Dialog
        open={ratingDialogOpen}
        onClose={() => setRatingDialogOpen(false)}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>Rate Your Consultation</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <Typography>How was your consultation?</Typography>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              size='large'
            />
            <TextField
              label='Write a review (optional)'
              multiline
              rows={4}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRatingDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSubmitRating}
            variant='contained'
            disabled={!rating}
          >
            Submit Rating
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SpecialistBookings;
