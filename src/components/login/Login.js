import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Alert, AlertTitle,
    Button,
    Card,
    CardContent,
    CardMedia,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, Divider,
    Grid,
    Typography
} from "@mui/material";
import {Form} from "react-bootstrap";

async function loginUser(credentials) {

    // TODO: Handle Token authentication

    // return fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    // })
    //     .then(data => data.json())
    return {token: 'abc'};
}

export default function Login(props) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loginErrorMessage, setLoginErrorMessage] = useState('');


    const [signupDialogOpen, setSignupDialogOpen] = useState(false);
    const [signupErrorMessage, setSignupErrorMessage] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');


    const [resetPasswordDialogOpen, setResetPasswordDialogOpen] = useState(false);
    const [resetCode, setResetCode] = useState('');


    const handleLogin = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        let tokenResult = props.setToken(token);
        if (tokenResult === null || tokenResult === undefined) {
            setLoginErrorMessage('Invalid Email Address or Password.');
        } else {
            setLoginErrorMessage('');
        }

        setUserName(null);
        setPassword(null);
    }

    const handleSignup = async e => {
        e.preventDefault();
        let apiErrorMessage = '';

        if (signupPassword !== signupPasswordConfirm) {
            setSignupErrorMessage('Error: Passwords do not match.');
            return;
        }

        // TODO: Make api call to create account here.
        let success = true;

        console.log(firstName);
        console.log(lastName);
        console.log(signupEmail);


        if (success) {
            closeSignupDialog();
            props.showAlert('Successfully created account!', 'success');
        } else {
            setSignupErrorMessage(apiErrorMessage);
        }
    }

    const closeSignupDialog = () => {
        setSignupEmail(null);
        setFirstName(null);
        setLastName(null);
        setSignupPassword(null);
        setSignupPasswordConfirm(null);
        setSignupErrorMessage(null);
        setSignupDialogOpen(false);
    }

    const handleResetPasswordSendCode = e => {
        e.preventDefault();
        // TODO: Handle API email reset code sending here

        props.showAlert("If there is an account associated with the provided email address, a reset code will be sent");
    }

    const handleResetPasswordWithCode = e => {
        e.preventDefault();
        // TODO: Handle API email reset code sending here

        if (signupPassword !== signupPasswordConfirm) {
            props.showAlert('Error: Passwords do not match.', 'error');
            return;
        }

        props.showAlert("Password successfully reset! You may now log in with your new password.");
        console.log(resetCode);
        closeResetPasswordDialog();
    }

    const closeResetPasswordDialog = () => {
        setResetCode('');
        setSignupEmail(null);
        setSignupPassword(null);
        setSignupPasswordConfirm(null);
        setResetPasswordDialogOpen(false);
    }


    return (

        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                style={{minHeight: '100vh'}}
            >


                <Grid item xs={12} sm={8} md={4} lg={3} xl={2} className={'mt-4'}>
                    <CardMedia
                        component="img"

                        image="https://dashboard.hackumass.com/assets/HackUMassLogo-0d7b545eaa8fab4612a08cd5ea548c64bc6e755b961e6916bafad21c7da04ab4.png"
                        alt="Dashboard Logo"
                        style={{marginBottom: '3em'}}
                    />
                    <Card className='pt-2 pb-2 px-4'>

                        <CardContent style={{padding: '1em'}}>
                            <Typography variant="subtitle1" component="div" className='mb-4'>
                                Login to your account
                            </Typography>

                            <Form onSubmit={handleLogin}>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='loginInputLabel'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" required
                                                  onChange={e => setUserName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className='mb-4'>
                                    <Form.Label className='loginInputLabel'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" required
                                                  onChange={e => setPassword(e.target.value)}/>
                                </Form.Group>

                                {loginErrorMessage &&
                                    <Alert severity="error" className='mt-2'>
                                        <AlertTitle>Unable to Sign In</AlertTitle>
                                        {loginErrorMessage}
                                    </Alert>
                                }

                                <Button color='primary' disableElevation type="submit" variant={'contained'} fullWidth>
                                    Sign in
                                </Button>

                            </Form>

                        </CardContent>
                    </Card>

                    <Card className='pt-2 pb-2 px-4 mt-4'>

                        <CardContent style={{padding: '1em'}}>
                            <Button color='primary' disableElevation variant={'contained'} fullWidth className='mb-3'
                                    onClick={() => setSignupDialogOpen(true)}>
                                Create an Account
                            </Button>
                            <Button color='primary' disableElevation variant={'outlined'} fullWidth
                                    onClick={() => setResetPasswordDialogOpen(true)}>
                                Forgot password
                            </Button>

                        </CardContent>
                    </Card>
                </Grid>


            </Grid>


            <Dialog open={signupDialogOpen} onClose={closeSignupDialog} maxWidth={'sm'} fullWidth>
                <DialogTitle>Create a Dashboard Account</DialogTitle>
                <Form onSubmit={handleSignup}>
                    <DialogContent>
                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" required
                                          onChange={e => setFirstName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" required
                                          onChange={e => setLastName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Address" required
                                          onChange={e => setSignupEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className='mb-4'>
                            <Form.Label className='loginInputLabel'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required
                                          onChange={e => setSignupPassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className='mb-4'>
                            <Form.Label className='loginInputLabel'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required
                                          onChange={e => setSignupPasswordConfirm(e.target.value)}/>
                        </Form.Group>

                        {signupErrorMessage &&
                            <Alert severity="error" className='mt-2'>
                                <AlertTitle>Unable to Create Account</AlertTitle>
                                {signupErrorMessage}
                            </Alert>
                        }


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeSignupDialog} disableElevation>Cancel</Button>
                        <Button type='submit' variant='contained' disableElevation> Create Account</Button>
                    </DialogActions>
                </Form>
            </Dialog>


            <Dialog open={resetPasswordDialogOpen} onClose={closeResetPasswordDialog} maxWidth={'sm'} fullWidth>
                <DialogTitle>Reset Password</DialogTitle>
                <Divider/>
                <DialogContent>
                    <Typography variant='h6' component='div' className='mb-3'><b>Step 1:</b> Get Reset Code</Typography>
                    <Form onSubmit={handleResetPasswordSendCode}>
                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Address" required
                                          onChange={e => setSignupEmail(e.target.value)}/>
                        </Form.Group>
                        <Button type='submit' variant='contained' disableElevation> Send Reset Code</Button>
                    </Form>

                    <Divider className='mt-3 mb-3' />

                    <Typography variant='h6' component='div' className='mb-3'><b>Step 2:</b> Use Reset Code to Set New Password</Typography>
                    <Form onSubmit={handleResetPasswordWithCode}>
                        <Form.Group className='mb-3'>
                            <Form.Label className='loginInputLabel'>Reset Code</Form.Label>
                            <Form.Control type="email" placeholder="Enter Reset Code" required
                                          onChange={e => setResetCode(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className='mb-4'>
                            <Form.Label className='loginInputLabel'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter New Password" required
                                          onChange={e => setSignupPassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className='mb-4'>
                            <Form.Label className='loginInputLabel'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm New Password" required
                                          onChange={e => setSignupPasswordConfirm(e.target.value)}/>
                        </Form.Group>

                        <Button type='submit' variant='contained' disableElevation> Send Reset Code</Button>
                    </Form>

                    <Divider className='mt-3' />

                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' disableElevation onClick={closeResetPasswordDialog}>Close</Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired
}