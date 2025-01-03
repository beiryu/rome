import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  TextField,
  IconButton,
  Button,
  Badge,
  Chip,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  Circle as CircleIcon,
} from '@mui/icons-material';

const StaffMessages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with API calls
  const mockChats = [
    {
      id: 1,
      user: {
        id: 1,
        name: 'John Doe',
        avatar: null,
        status: 'online',
      },
      lastMessage: {
        text: 'Hello, I have a question about my fitness booking.',
        timestamp: '2024-01-20T10:30:00',
        unread: true,
      },
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Jane Smith',
        avatar: null,
        status: 'offline',
      },
      lastMessage: {
        text: 'Thank you for your help!',
        timestamp: '2024-01-19T15:45:00',
        unread: false,
      },
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Mike Johnson',
        avatar: null,
        status: 'online',
      },
      lastMessage: {
        text: 'When is the next available slot?',
        timestamp: '2024-01-19T09:15:00',
        unread: true,
      },
    },
  ];

  const mockMessages = {
    1: [
      {
        id: 1,
        sender: 'user',
        text: 'Hello, I have a question about my fitness booking.',
        timestamp: '2024-01-20T10:30:00',
      },
      {
        id: 2,
        sender: 'staff',
        text: 'Hi John! How can I help you today?',
        timestamp: '2024-01-20T10:31:00',
      },
      {
        id: 3,
        sender: 'user',
        text: 'I need to reschedule my session for next week.',
        timestamp: '2024-01-20T10:32:00',
      },
    ],
    2: [
      {
        id: 1,
        sender: 'user',
        text: 'Is there availability for a consultation tomorrow?',
        timestamp: '2024-01-19T15:40:00',
      },
      {
        id: 2,
        sender: 'staff',
        text: 'Yes, we have slots available at 2 PM and 4 PM.',
        timestamp: '2024-01-19T15:42:00',
      },
      {
        id: 3,
        sender: 'user',
        text: 'Thank you for your help!',
        timestamp: '2024-01-19T15:45:00',
      },
    ],
    3: [
      {
        id: 1,
        sender: 'user',
        text: 'When is the next available slot?',
        timestamp: '2024-01-19T09:15:00',
      },
    ],
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    // Add message to the chat
    const newMsg = {
      id: mockMessages[selectedChat.id].length + 1,
      sender: 'staff',
      text: newMessage,
      timestamp: new Date().toISOString(),
    };

    mockMessages[selectedChat.id].push(newMsg);
    setNewMessage('');
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const filteredChats = mockChats.filter((chat) =>
    chat.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper sx={{ display: 'flex', height: 'calc(100vh - 200px)' }}>
      {/* Chat List */}
      <Box
        sx={{
          width: 320,
          borderRight: 1,
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            size='small'
            placeholder='Search conversations...'
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
        </Box>

        <List sx={{ flex: 1, overflow: 'auto' }}>
          {filteredChats.map((chat) => (
            <React.Fragment key={chat.id}>
              <ListItem
                button
                selected={selectedChat?.id === chat.id}
                onClick={() => setSelectedChat(chat)}
              >
                <ListItemAvatar>
                  <Badge
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                      <CircleIcon
                        sx={{
                          fontSize: 12,
                          color:
                            chat.user.status === 'online'
                              ? 'success.main'
                              : 'grey.500',
                          backgroundColor: 'background.paper',
                          borderRadius: '50%',
                        }}
                      />
                    }
                  >
                    <Avatar alt={chat.user.name}>
                      {chat.user.name.charAt(0)}
                    </Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Typography variant='subtitle2'>
                        {chat.user.name}
                      </Typography>
                      <Typography variant='caption' color='text.secondary'>
                        {formatTimestamp(chat.lastMessage.timestamp)}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography
                      variant='body2'
                      color={
                        chat.lastMessage.unread
                          ? 'text.primary'
                          : 'text.secondary'
                      }
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {chat.lastMessage.text}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component='li' />
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Chat Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <Box
              sx={{
                p: 2,
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Avatar alt={selectedChat.user.name}>
                {selectedChat.user.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant='subtitle1'>
                  {selectedChat.user.name}
                </Typography>
                <Chip
                  size='small'
                  label={selectedChat.user.status}
                  color={
                    selectedChat.user.status === 'online'
                      ? 'success'
                      : 'default'
                  }
                  variant='outlined'
                />
              </Box>
            </Box>

            {/* Messages */}
            <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
              {mockMessages[selectedChat.id].map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: 'flex',
                    justifyContent:
                      message.sender === 'staff' ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '70%',
                      backgroundColor:
                        message.sender === 'staff'
                          ? 'primary.main'
                          : 'grey.100',
                      color:
                        message.sender === 'staff' ? 'white' : 'text.primary',
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <Typography variant='body1'>{message.text}</Typography>
                    <Typography
                      variant='caption'
                      sx={{
                        display: 'block',
                        textAlign: 'right',
                        mt: 0.5,
                        opacity: 0.8,
                      }}
                    >
                      {formatTimestamp(message.timestamp)}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Message Input */}
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size='small'>
                  <AttachFileIcon />
                </IconButton>
                <TextField
                  fullWidth
                  size='small'
                  placeholder='Type a message...'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  variant='contained'
                  endIcon={<SendIcon />}
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography color='text.secondary'>
              Select a conversation to start messaging
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default StaffMessages;
