import React, {useState} from 'react';
import {Alert, Button, Card, CardContent, CardHeader, Divider, Grid, Typography} from "@mui/material";
import {FiUserCheck, FiUsers} from "react-icons/all";
import {Form} from "react-bootstrap";

export default function CheckIn() {

    let [participantEmail, setParticipantEmail] = useState('');

    let [resultAlertOpen, setResultAlertOpen] = useState(false);
    let [checkInResult, setCheckInResult] = useState('');
    let [checkInResultStatus, setCheckInResultStatus] = useState('');



    const checkInParticipant = (e) => {
        e.preventDefault();

        // TODO: Call API and check in participant

        // TODO: Update number of checked in and total participants

        setCheckInResult('Successfully checked in participant: ' + participantEmail + '.');
        setCheckInResultStatus('success');
        setResultAlertOpen(true);

        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

        setParticipantEmail('');
    }


    return (
        <div>
            <Typography variant='h4' component='div' className='mb-4'>
                Check In
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >

                <Grid item xs={12} md={6} className='mb-md-5 mb-sm-1'>
                    <Card>
                        <CardContent>
                            <Button startIcon={<FiUserCheck size={'2em'}/>}>
                                <Typography variant='h5' component='span'>
                                    <b>123</b>
                                </Typography>
                                <Typography variant='paragraph' component='span'>
                                    &nbsp; Checked-In Attendees
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} className='mb-md-5 mb-sm-1'>
                    <Card>
                        <CardContent>
                            <Button startIcon={<FiUsers size={'2em'}/>}>
                                <Typography variant='h5' component='span'>
                                    <b>456</b>
                                </Typography>
                                <Typography variant='paragraph' component='span'>
                                    &nbsp; RSVP'd Users
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={0} md={2}/>
                <Grid item xs={12} md={8}>
                    <Card className='mb-5'>
                        <CardHeader title='Check in Participants'/>
                        <CardContent>
                            <Divider className='mb-3'/>
                            <Form onSubmit={checkInParticipant}>
                                <Form.Group className='mb-4'>
                                    <Form.Label className='loginInputLabel'>Participant Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Scan QR Code or Type Email" required
                                                  onChange={e => setParticipantEmail(e.target.value)}/>
                                </Form.Group>
                                <div style={{width: '100%'}} align='center'>
                                    <Button disableElevation variant='contained' type='submit' style={{width: '50%'}}>
                                        Check In
                                    </Button>
                                </div>

                                <div style={{width: '100%'}} className='mt-2' align='center'>
                                    <Button disableElevation variant='contained' type='submit' color='secondary' style={{width: '50%'}}>
                                        Force Check In
                                    </Button>
                                </div>

                                {resultAlertOpen &&
                                    <Alert
                                        onClose={() => setResultAlertOpen(false)}
                                        autoHideDuration={6000} severity={checkInResultStatus}
                                        sx={{width: '100%'}}
                                        className='mt-3'
                                    >
                                        {checkInResult}
                                    </Alert>
                                }
                            </Form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={0} md={2}/>

            </Grid>


        </div>
    );
}