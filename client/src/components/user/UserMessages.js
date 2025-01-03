import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Badge,
  Chip,
} from '@mui/material';
import {
  Delete,
  Reply,
  Mail,
  MailOutline,
  Close,
  Send,
} from '@mui/icons-material';

const UserMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [replyText, setReplyText] = useState('');

  // Mock messages data
  const messages = [
    {
      id: 1,
      sender: 'John Smith',
      subject: 'Personal Training Session Confirmation',
      message:
        'Your personal training session has been confirmed for tomorrow at 10:00 AM. Please arrive 10 minutes early for warm-up.',
      date: '2024-01-15',
      read: false,
      type: 'Fitness',
    },
    {
      id: 2,
      sender: 'Dr. Sarah Wilson',
      subject: 'Nutrition Consultation Follow-up',
      message:
        'Thank you for attending the nutrition consultation. I have attached your personalized meal plan as discussed.',
      date: '2024-01-14',
      read: true,
      type: 'Specialist',
    },
    {
      id: 3,
      sender: 'System Notification',
      subject: 'Welcome to Our Platform',
      message:
        'Welcome to our fitness platform! We are excited to have you on board.',
      date: '2024-01-10',
      read: true,
      type: 'System',
    },
  ];

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  const handleReplyClick = () => {
    setReplyDialogOpen(true);
  };

  const handleCloseReply = () => {
    setReplyDialogOpen(false);
    setReplyText('');
  };

  const handleSendReply = () => {
    // eslint-disable-next-line no-console
    console.log('Sending reply:', replyText);
    handleCloseReply();
  };

  const handleDelete = (messageId) => {
    // eslint-disable-next-line no-console
    console.log('Deleting message:', messageId);
  };

  return (
    <Box>
      {/* Message List */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant='h5' sx={{ fontWeight: 600, mb: 3 }}>
          Messages
        </Typography>
        <List>
          {messages.map((message, index) => (
            <React.Fragment key={message.id}>
              <ListItem
                alignItems='flex-start'
                sx={{
                  cursor: 'pointer',
                  bgcolor: message.read ? 'transparent' : 'action.hover',
                  '&:hover': { bgcolor: 'action.hover' },
                }}
                onClick={() => handleMessageClick(message)}
                secondaryAction={
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={() => handleDelete(message.id)}
                  >
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Badge color='primary' variant='dot' invisible={message.read}>
                    <Avatar>{message.read ? <MailOutline /> : <Mail />}</Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Typography
                        component='span'
                        variant='subtitle1'
                        color='text.primary'
                        sx={{ fontWeight: message.read ? 400 : 600 }}
                      >
                        {message.subject}
                      </Typography>
                      <Chip
                        label={message.type}
                        size='small'
                        color={
                          message.type === 'Fitness'
                            ? 'primary'
                            : message.type === 'Specialist'
                              ? 'secondary'
                              : 'default'
                        }
                      />
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {message.sender}
                      </Typography>
                      {' — '}
                      {message.message}
                    </>
                  }
                />
              </ListItem>
              {index < messages.length - 1 && (
                <Divider variant='inset' component='li' />
              )}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Selected Message View */}
      {selectedMessage && (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant='h6'>{selectedMessage.subject}</Typography>
            <Button
              startIcon={<Reply />}
              variant='contained'
              onClick={handleReplyClick}
            >
              Reply
            </Button>
          </Box>
          <Typography variant='subtitle2' color='text.secondary' gutterBottom>
            From: {selectedMessage.sender}
          </Typography>
          <Typography variant='subtitle2' color='text.secondary' gutterBottom>
            Date: {new Date(selectedMessage.date).toLocaleDateString()}
          </Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>
            {selectedMessage.message}
          </Typography>
        </Paper>
      )}

      {/* Reply Dialog */}
      <Dialog
        open={replyDialogOpen}
        onClose={handleCloseReply}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            Reply to Message
            <IconButton onClick={handleCloseReply}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='Your Reply'
            fullWidth
            multiline
            rows={4}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReply}>Cancel</Button>
          <Button
            onClick={handleSendReply}
            variant='contained'
            startIcon={<Send />}
          >
            Send Reply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserMessages;
