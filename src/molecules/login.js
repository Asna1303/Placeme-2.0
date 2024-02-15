import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const Login=() =>{
    const paperStyle={padding :20, height : '70vh', width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:'green'}
  return (
   <Grid>
<Paper elevation ={10} style={paperStyle}>
  <Grid align='center'>
  <Avatar style={avatarStyle}> <LockOutlinedIcon /></Avatar>
  <h2>Log in</h2>
  </Grid>
  <TextField id="standard-basic" label="Username*" variant="standard" placeholder="Enter your name" fullWidth/>
  <TextField id="standard-basic" label="Password*" variant="standard" placeholder="Enter your password" type='password' fullWidth/>
  <Grid container justifyContent="flex-start" alignItems="center">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </Grid>
  
   <Button variant="contained" type='submit' color='primary' fullWidth>LOG IN</Button>


</Paper>
   </Grid>
  )
}

export default Login