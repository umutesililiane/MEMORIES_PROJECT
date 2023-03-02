import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography,Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input';
import useStyles from './styles'

const Auth = () => {
    const classes = useStyles();

    const [showPassword, setshowPassword] = useState(false)

    const [isSignUp, setIsSignUp] = useState(false);

    const handleShowPassword = () => setshowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignUp((previsSignUp) => !previsSignUp);
        handleShowPassword(false);
    };



    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'sign In'}</Typography>
                <form className={classes.form} onsubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>

                                    <Input name="firstName" label="Fist Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="Last Name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name="email" label=" Email Adress" handleChange={handleChange} type="email" />
                        <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && 
                        <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.button}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign In ' : 'Dont have an account? Sign Up'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container >


    )
}

export default Auth;
