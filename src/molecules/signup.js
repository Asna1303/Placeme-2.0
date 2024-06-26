import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

const Signup = () => {
  const containerStyle = { backgroundColor: '#1bbd7e', minHeight: '100vh', padding: '20px' };
  const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const headerStyle={margin:0};
  const buttonStyle={margin:'8px 0'};
  const marginTop={marginTop:5};

  return (
    <div style={containerStyle}>
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
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{display:'initial'}}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>

            <TextField id="standard-basic" label="Phone Number*" variant="standard" placeholder="Enter your phone number" fullWidth/>

            <TextField id="standard-basic" label="Password*" variant="standard" placeholder="Enter your password" fullWidth/>

            <TextField id="standard-basic" label="Confirm password*" variant="standard" placeholder="Enter your password" fullWidth/>

            <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and conditions" />

            <Button variant="contained" type='submit' style={buttonStyle} color='primary' fullWidth>SIGN UP</Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Signup;
