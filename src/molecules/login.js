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
import { Formik  ,Field} from 'formik'; // Note the correct import statement

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
    const avatarStyle = { backgroundColor: 'green' };
    const buttonStyle = { margin: '8px 0' };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Log in</h2>
                </Grid>
                <Formik
                    initialValues={{ username: '', password: '', rememberMe: false }}
                    onSubmit={(values) => {
                        // Your form submission logic goes here
                        console.log(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field as={TextField}
                                id="username"
                                name="username"
                                label="Username*"
                                variant="standard"
                                placeholder="Enter your name"
                                fullWidth
                                value={values.username}
                                onChange={handleChange}
                            />
                            <Field as={TextField}
                                id="password"
                                name="password"
                                label="Password*"
                                variant="standard"
                                placeholder="Enter your password"
                                type="password"
                                fullWidth
                                value={values.password}
                                onChange={handleChange}
                            />
                            <Grid container justifyContent="flex-start" alignItems="center">
                                <Field as={FormControlLabel}
                                    control={
                                        <Checkbox
                                            id="rememberMe"
                                            name="rememberMe"
                                            defaultChecked={values.rememberMe}
                                            onChange={handleChange}
                                        />
                                    }
                                    label="Remember me"
                                />
                            </Grid>
                            <Button
                                variant="contained"
                                type="submit"
                                style={buttonStyle}
                                color="primary"
                                fullWidth
                            >
                                LOG IN
                            </Button>
                        </form>
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
    );
}

export default Login;
