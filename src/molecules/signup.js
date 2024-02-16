import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

import { Typography } from '@mui/material';

const Signup = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle = { backgroundColor: 'green' };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            
          </Avatar>
          <h2>Sign up</h2>
          <Typography variant='caption'>Please fill this form to create an account</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signup;


