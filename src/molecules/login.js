import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {  Formik, Form, Field, ErrorMessage} from 'formik'; // Note the correct import statement
import * as Yup from 'yup'

const Login = ({ handleChange }) => {

  const containerStyle = { backgroundColor: '#1bbd7e', minHeight: '100vh', padding: '20px' };
  const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  const initialValues = {
      username: '',
      password: '',
      remember: false
  };
  const validationSchema = Yup.object().shape({
      username: Yup.string().email('please enter valid email id').required("Required"),
      password: Yup.string().required("Required")
  });
  const onSubmit = (values, props) => {
      console.log(values);
      setTimeout(() => {
          props.resetForm();
          props.setSubmitting(false);
      }, 2000);
  };
  
  return (
    <div style={containerStyle}>
      <Grid container justifyContent="center">
          <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                  <h2>Sign In</h2>
              </Grid>
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                  {(props) => (
                      <Form>
                        {console.log(props)}
                          <Field as={TextField} label='Username' name="username"
                              placeholder='Enter username' fullWidth required
                              helperText={<ErrorMessage name="username" />}
                          />
                          <Field as={TextField} label='Password' name="password"
                              placeholder='Enter password' type='password' fullWidth required
                              helperText={<ErrorMessage name="password" />} />
                          <Field as={FormControlLabel}
                              name='remember'
                              control={
                                  <Checkbox
                                      color="primary"
                                  />
                              }
                              label="Remember me"
                          />
                          <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                              style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                      </Form>
                  )}
              </Formik>
              <Grid container justifyContent="flex-start">
                  <Link href="forgetpassword">Forgot password</Link>
              </Grid>
              <br />
              <Grid container justifyContent="flex-start">
                  <p>Do you have an account? <Link href="signup">Sign up!</Link></p>
              </Grid>
          </Paper>
      </Grid>
    </div>
  );
}

export default Login;
