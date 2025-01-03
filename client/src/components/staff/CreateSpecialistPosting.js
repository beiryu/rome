import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  MenuItem,
  IconButton,
  Alert,
  CircularProgress,
  Chip,
} from '@mui/material';
import { PhotoCamera, Preview, Add as AddIcon } from '@mui/icons-material';

const specializations = [
  'Nutritionist',
  'Physical Therapist',
  'Sports Medicine',
  'Mental Health',
  'Wellness Coach',
  'Rehabilitation',
  'Occupational Therapy',
  'Dietitian',
];

const CreateSpecialistPosting = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [newQualification, setNewQualification] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    specialization: '',
    price: '',
    duration: '',
    location: '',
    qualifications: [],
    availability: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleAddQualification = () => {
    if (newQualification.trim()) {
      setFormData((prev) => ({
        ...prev,
        qualifications: [...prev.qualifications, newQualification.trim()],
      }));
      setNewQualification('');
    }
  };

  const handleDeleteQualification = (index) => {
    setFormData((prev) => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.title) errors.push('Title is required');
    if (!formData.description) errors.push('Description is required');
    if (!formData.specialization) errors.push('Specialization is required');
    if (!formData.price) errors.push('Price is required');
    if (!formData.duration) errors.push('Duration is required');
    if (!formData.location) errors.push('Location is required');
    if (!formData.availability) errors.push('Availability is required');

    if (errors.length > 0) {
      setError(errors.join('. '));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // eslint-disable-next-line no-console
      console.log('Creating specialist posting:', formData);
      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        specialization: '',
        price: '',
        duration: '',
        location: '',
        qualifications: [],
        availability: '',
        image: null,
      });
    } catch (err) {
      setError('Failed to create posting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePreview = () => {
    setPreviewMode(!previewMode);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant='h5' sx={{ fontWeight: 600 }}>
          Create Specialist Posting
        </Typography>
        <Button
          startIcon={<Preview />}
          onClick={togglePreview}
          color={previewMode ? 'primary' : 'inherit'}
        >
          {previewMode ? 'Edit Mode' : 'Preview'}
        </Button>
      </Box>

      {error && (
        <Alert severity='error' sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Image Upload */}
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center' }}>
              {formData.image ? (
                <Box
                  component='img'
                  src={URL.createObjectURL(formData.image)}
                  alt='Preview'
                  sx={{
                    maxWidth: '100%',
                    maxHeight: 200,
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: 200,
                    bgcolor: 'grey.100',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='label'
                    disabled={loading || previewMode}
                  >
                    <input
                      hidden
                      accept='image/*'
                      type='file'
                      onChange={handleImageChange}
                    />
                    <PhotoCamera sx={{ fontSize: 40 }} />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              disabled={loading || previewMode}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label='Specialization'
              name='specialization'
              value={formData.specialization}
              onChange={handleChange}
              disabled={loading || previewMode}
              required
            >
              {specializations.map((specialization) => (
                <MenuItem key={specialization} value={specialization}>
                  {specialization}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Price'
              name='price'
              value={formData.price}
              onChange={handleChange}
              placeholder='e.g. $100/session'
              disabled={loading || previewMode}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Duration'
              name='duration'
              value={formData.duration}
              onChange={handleChange}
              placeholder='e.g. 45 minutes'
              disabled={loading || previewMode}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Location'
              name='location'
              value={formData.location}
              onChange={handleChange}
              disabled={loading || previewMode}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Availability'
              name='availability'
              value={formData.availability}
              onChange={handleChange}
              placeholder='e.g. Mon-Fri, 9 AM - 5 PM'
              disabled={loading || previewMode}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              disabled={loading || previewMode}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ mb: 2 }}>
              <Typography variant='subtitle1' sx={{ mb: 1 }}>
                Qualifications
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <TextField
                  fullWidth
                  size='small'
                  value={newQualification}
                  onChange={(e) => setNewQualification(e.target.value)}
                  placeholder='Add qualification'
                  disabled={loading || previewMode}
                />
                <Button
                  variant='outlined'
                  startIcon={<AddIcon />}
                  onClick={handleAddQualification}
                  disabled={!newQualification.trim() || loading || previewMode}
                >
                  Add
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {formData.qualifications.map((qualification, index) => (
                  <Chip
                    key={index}
                    label={qualification}
                    onDelete={
                      !loading && !previewMode
                        ? () => handleDeleteQualification(index)
                        : undefined
                    }
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {!previewMode && (
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
                    'Create Posting'
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

export default CreateSpecialistPosting;
