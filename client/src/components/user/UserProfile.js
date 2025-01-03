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
} from '@mui/material';
import { Edit, PhotoCamera } from '@mui/icons-material';
import useAuthStore from '../../stores/useAuthStore';

const UserProfile = () => {
  const { user, updateProfile } = useAuthStore();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: '',
    address: '',
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

          {isEditing && (
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant='contained' color='primary' type='submit'>
                  Save Changes
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
};

export default UserProfile;
