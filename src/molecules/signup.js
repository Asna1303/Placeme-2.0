import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TextField from '@mui/material/TextField';

import { Typography } from '@mui/material';

const Signup = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle = { backgroundColor: 'green' };
const headerStyle={margin:0}
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon/>
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption'>Please fill this form to create an account</Typography>
        </Grid>
        <form>

        <TextField id="standard-basic" label="Username*" variant="standard" placeholder="Enter your name" fullWidth/>
        
  <TextField id="standard-basic" label="Email*" variant="standard" placeholder="Enter your mail id" fullWidth/>
  
  <TextField id="standard-basic" label="Phone Number*" variant="standard" placeholder="Enter your phone number" fullWidth/>
  
  <TextField id="standard-basic" label="Password*" variant="standard" placeholder="Enter your password" fullWidth/>
  
  <TextField id="standard-basic" label="Confirm password*" variant="standard" placeholder="Enter your password" fullWidth/>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;


