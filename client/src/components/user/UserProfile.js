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
  MenuItem,
  Chip,
} from '@mui/material';
import { Edit, PhotoCamera } from '@mui/icons-material';
import useAuthStore from '../../stores/useAuthStore';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const fitnessPreferences = [
  'Yoga',
  'Meditation',
  'Weight Training',
  'Cardio',
  'HIIT',
  'Pilates',
];

const specialistPreferences = [
  'Oncology',
  'Locum',
  'Physiotherapy',
  'Nutrition',
  'Mental Health',
  'Sports Medicine',
];

const genderOptions = ['Male', 'Female', 'Other'];

const UserProfile = () => {
  const { user, updateProfile } = useAuthStore();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: '',
    address: '',
    dateOfBirth: null,
    gender: '',
    countryOfResidence: '',
    nationality: '',
    fitnessPreferences: [],
    specialistPreferences: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant='h5' sx={{ fontWeight: 600 }}>
            Profile Information
          </Typography>
          <Button
            startIcon={<Edit />}
            onClick={() => setIsEditing(!isEditing)}
            color={isEditing ? 'error' : 'primary'}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Profile Picture */}
            <Grid item xs={12} sx={{ textAlign: 'center', mb: 2 }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: 'primary.main',
                    fontSize: '3rem',
                  }}
                >
                  JD
                </Avatar>
                {isEditing && (
                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      bgcolor: 'background.paper',
                      '&:hover': {
                        bgcolor: 'background.paper',
                      },
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
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
                disabled={!isEditing}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Nationality'
                name='nationality'
                value={formData.nationality}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle1' gutterBottom sx={{ mt: 2 }}>
              What I am looking for in Fitness
            </Typography>
            <TextField
              select
              fullWidth
              SelectProps={{
                multiple: true,
                renderValue: (selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                ),
              }}
              value={
                Array.isArray(formData.fitnessPreferences)
                  ? formData.fitnessPreferences
                  : []
              }
              onChange={(e) =>
                handleChange({
                  target: {
                    name: 'fitnessPreferences',
                    value: e.target.value,
                  },
                })
              }
              name='fitnessPreferences'
              disabled={!isEditing}
            >
              {fitnessPreferences.map((preference) => (
                <MenuItem key={preference} value={preference}>
                  {preference}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle1' gutterBottom sx={{ mt: 2 }}>
              What I am looking for in Specialist
            </Typography>
            <TextField
              select
              fullWidth
              SelectProps={{
                multiple: true,
                renderValue: (selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                ),
              }}
              value={
                Array.isArray(formData.specialistPreferences)
                  ? formData.specialistPreferences
                  : []
              }
              onChange={(e) =>
                handleChange({
                  target: {
                    name: 'specialistPreferences',
                    value: e.target.value,
                  },
                })
              }
              name='specialistPreferences'
              disabled={!isEditing}
            >
              {specialistPreferences.map((preference) => (
                <MenuItem key={preference} value={preference}>
                  {preference}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            {isEditing && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant='contained' color='primary' type='submit'>
                  Save Changes
                </Button>
              </Box>
            )}
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default UserProfile;
