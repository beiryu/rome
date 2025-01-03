import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  InputAdornment,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Block as BlockIcon,
} from '@mui/icons-material';

const UserSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Mock user data - replace with API call
  const mockUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      status: 'active',
      bookings: 8,
      avatar: null,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'active',
      bookings: 12,
      avatar: null,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      status: 'inactive',
      bookings: 3,
      avatar: null,
    },
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'error';
      default:
        return 'default';
    }
  };

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            fullWidth
            placeholder='Search users by name or email...'
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
          <IconButton color='primary'>
            <FilterIcon />
          </IconButton>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} md={6} key={user.id}>
            <Card
              sx={{
                cursor: 'pointer',
                '&:hover': { boxShadow: 6 },
                transition: 'box-shadow 0.3s',
              }}
              onClick={() => handleUserClick(user)}
            >
              <CardContent>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
                >
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{ width: 56, height: 56 }}
                  >
                    {user.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant='h6'>{user.name}</Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Chip
                        label={user.status.toUpperCase()}
                        color={getStatusColor(user.status)}
                        size='small'
                      />
                    </Box>
                  </Box>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <EmailIcon color='action' fontSize='small' />
                      <Typography variant='body2' color='text.secondary'>
                        {user.email}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 2,
                  }}
                >
                  <Typography variant='body2' color='text.secondary'>
                    {user.bookings} bookings
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* User Detail Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth='sm'
        fullWidth
      >
        {selectedUser && (
          <>
            <DialogTitle>User Details</DialogTitle>
            <DialogContent>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}
              >
                <Avatar
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  sx={{ width: 80, height: 80 }}
                >
                  {selectedUser.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant='h6'>{selectedUser.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Chip
                      label={selectedUser.status.toUpperCase()}
                      color={getStatusColor(selectedUser.status)}
                      size='small'
                    />
                    <Chip
                      label={selectedUser.type.toUpperCase()}
                      variant='outlined'
                      size='small'
                    />
                  </Box>
                </Box>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Contact Information
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <EmailIcon color='action' fontSize='small' />
                      <Typography>{selectedUser.email}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon color='action' fontSize='small' />
                      <Typography>{selectedUser.phone}</Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Account Information
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant='body2'>
                      Join Date:{' '}
                      {new Date(selectedUser.joinDate).toLocaleDateString()}
                    </Typography>
                    <Typography variant='body2'>
                      Total Bookings: {selectedUser.bookings}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                startIcon={<BlockIcon />}
                color='error'
                onClick={handleCloseDialog}
              >
                Block User
              </Button>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default UserSearch;
