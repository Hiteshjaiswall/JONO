import { Box, Grid } from '@mui/material';
import React from 'react';
import ChatBar from '../components/chat/left/ChatBar';
import Chats from '../components/chat/right/Chats';

const MainLayout = () => {
  return (
    <Grid>
      <Box>
        <ChatBar />
      </Box>
      <Box>
        <Chats />
      </Box>
    </Grid>
  );
};

export default MainLayout;
