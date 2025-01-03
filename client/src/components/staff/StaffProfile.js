import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
  Alert,
  CircularProgress,
  MenuItem,
} from '@mui/material';
import { Edit, PhotoCamera } from '@mui/icons-material';
import useAuthStore from '../../stores/useAuthStore';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const genderOptions = ['Male', 'Female', 'Other'];

const StaffProfile = () => {
  const { user, updateProfile, loading, error, clearError } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: '',
    address: '',
    dateOfBirth: null,
    gender: '',
    countryOfResidence: '',
    nationality: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateProfile(formData);
    if (success) {
      setIsEditing(false);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant='h5' sx={{ fontWeight: 600 }}>
          Staff Profile
        </Typography>
        <Button
          startIcon={<Edit />}
          onClick={() => setIsEditing(!isEditing)}
          color={isEditing ? 'error' : 'primary'}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </Box>

      {error && (
        <Alert severity='error' sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Profile Picture */}
          <Grid item xs={12} sx={{ textAlign: 'center', mb: 2 }}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  bgcolor: 'secondary.main',
                  fontSize: '3rem',
                }}
              >
                {user?.name?.charAt(0) || 'S'}
              </Avatar>
              {isEditing && (
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'background.paper',
                  }}
                  aria-label='upload picture'
                  component='label'
                >
                  <input hidden accept='image/*' type='file' />
                  <PhotoCamera />
                </IconButton>
              )}
            </Box>
          </Grid>

          {/* Form Fields */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Full Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing || loading}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing || loading}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing || loading}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing || loading}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label='Date of Birth'
                value={formData.dateOfBirth}
                onChange={(newValue) => {
                  setFormData((prev) => ({
                    ...prev,
                    dateOfBirth: newValue,
                  }));
                }}
                disabled={!isEditing}
                slotProps={{
                  textField: {
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label='Gender'
              name='gender'
              value={formData.gender}
              onChange={handleChange}
              disabled={!isEditing}
            >
              {genderOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Country of Residence'
              name='countryOfResidence'
              value={formData.countryOfResidence}
              onChange={handleChange}
              disabled={!isEditing || loading}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Nationality'
              name='nationality'
              value={formData.nationality}
              onChange={handleChange}
              disabled={!isEditing || loading}
            />
          </Grid>

          {isEditing && (
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={loading}
                  sx={{ minWidth: 120, height: 40 }}
                >
                  {loading ? (
                    <CircularProgress size={24} color='inherit' />
                  ) : (
                    'Save Changes'
                  )}
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
};

export default StaffProfile;
