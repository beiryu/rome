import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  Button,
} from '@mui/material';

const ListingCard = ({ listing, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${type}-listing/${listing.id}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 6,
          cursor: 'pointer',
        },
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={listing.image}
        alt={listing.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {listing.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {listing.description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6" color="primary">
            {listing.price}
          </Typography>
          <Rating
            value={listing.rating}
            precision={0.1}
            readOnly
            size="small"
          />
        </Box>
        <Button variant="contained" color="primary" fullWidth>
          Contact
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
