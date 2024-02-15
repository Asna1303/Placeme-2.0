import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';

const Login=() =>{
    const paperStyle={padding :20, height : '70vh', width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
  return (
   <Grid>
<Paper elevation ={10} style={paperStyle}>
  <Grid align='center'>
  <Avatar style={avatarStyle}> <LockOutlinedIcon /></Avatar>
  <h2>Sign in</h2>
  </Grid>
  <TextField id="standard-basic" label="Username" variant="standard" placeholder="Enter your name" fullWidth/>
   

</Paper>
   </Grid>
  )
}

export default Login