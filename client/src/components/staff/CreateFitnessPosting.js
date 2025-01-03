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
} from '@mui/material';
import { PhotoCamera, Preview } from '@mui/icons-material';

const categories = [
  'Personal Training',
  'Group Fitness',
  'Yoga',
  'HIIT',
  'Strength Training',
  'Cardio',
  'Pilates',
  'CrossFit',
];

const CreateFitnessPosting = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    duration: '',
    maxParticipants: '',
    location: '',
    requirements: '',
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

  const validateForm = () => {
    const errors = [];
    if (!formData.title) errors.push('Title is required');
    if (!formData.description) errors.push('Description is required');
    if (!formData.category) errors.push('Category is required');
    if (!formData.price) errors.push('Price is required');
    if (!formData.duration) errors.push('Duration is required');
    if (!formData.location) errors.push('Location is required');

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
      console.log('Creating fitness posting:', formData);
      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        category: '',
        price: '',
        duration: '',
        maxParticipants: '',
        location: '',
        requirements: '',
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
          Create Fitness Posting
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
              label='Category'
              name='category'
              value={formData.category}
              onChange={handleChange}
              disabled={loading || previewMode}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
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
              placeholder='e.g. $50/hour'
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
              placeholder='e.g. 60 minutes'
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
              label='Max Participants'
              name='maxParticipants'
              type='number'
              value={formData.maxParticipants}
              onChange={handleChange}
              disabled={loading || previewMode}
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
            <TextField
              fullWidth
              label='Requirements'
              name='requirements'
              value={formData.requirements}
              onChange={handleChange}
              multiline
              rows={2}
              disabled={loading || previewMode}
              placeholder='Any special requirements or prerequisites'
            />
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

export default CreateFitnessPosting;
